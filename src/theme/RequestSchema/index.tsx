"use client"

import React from "react"

import BrowserOnly from "@docusaurus/BrowserOnly"
import { MediaTypeObject } from "docusaurus-plugin-openapi-docs/lib/openapi/types"
import styles from "./styles.module.css"

interface Props {
  style?: React.CSSProperties
  title: string
  body: {
    content?: {
      [key: string]: MediaTypeObject
    }
    description?: string
    required?: string[] | boolean
  }
}

const RequestSchemaComponent: React.FC<Props> = ({ title, body, style }) => {
  if (
    body === undefined ||
    body.content === undefined ||
    Object.keys(body).length === 0 ||
    Object.keys(body.content).length === 0
  ) {
    return null
  }

  const mimeTypes = Object.keys(body.content)
  const customStyle = {
    border: "none",
    boxShadow: "none",
    padding: 0,
    margin: 0,
    background: "transparent",
    ...style,
  }

  const renderProperty = (name: string, schema: any, required: boolean = false) => {
      return (
      <div key={name} className={styles.propertyContainer}>
          <div>
          <span className={styles.propertyName}>{name}</span>
          <span className={styles.propertyType}>{schema.type}</span>
          {required && <span className={styles.propertyRequired}>required</span>}
          </div>
        
        {schema.description && (
          <div className={styles.propertyDescription}>{schema.description}</div>
          )}
        
        {schema.enum && (
          <div className={styles.enumContainer}>
            <div className={styles.enumLabel}>Possible values:</div>
            <div className={styles.enumValues}>
              {schema.enum.map((value: string) => (
                <span key={value} className={styles.enumValue}>{value}</span>
              ))}
            </div>
            </div>
          )}
        
        {schema.default !== undefined && (
          <div className={styles.defaultValue}>
            Default value: {schema.default}
          </div>
          )}
        
        {schema.example && (
          <div className={styles.example}>
            Example: {schema.example}
          </div>
          )}
        
        {schema.properties && (
          <div>
            {Object.entries(schema.properties).map(([propName, propSchema]: [string, any]) => (
              renderProperty(
                propName,
                propSchema,
                schema.required?.includes(propName)
              )
            ))}
          </div>
          )}
      </div>
    );
  };

  if (mimeTypes.length > 1) {
    const schema = body.content['application/json']?.schema;
    const hasProperties = schema && typeof schema === 'object' && 'properties' in schema && schema.properties;
    const requiredArray = schema && typeof schema === 'object' && 'required' in schema && Array.isArray(schema.required) ? schema.required : [];
    
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Request</h3>
          <span className={styles.mimeType}>APPLICATION/JSON</span>
                        </div>
        
        <div className={styles.bodyLabel}>
          BODY
          <span className={styles.requiredLabel}>REQUIRED</span>
                      </div>

        {hasProperties && Object.entries(schema.properties).map(
          ([propName, propSchema]: [string, any]) => renderProperty(
            propName,
            propSchema,
            requiredArray.includes(propName)
          )
        )}
      </div>
    )
  }

  const randomFirstKey = mimeTypes[0]
  const firstBody =
    body.content[randomFirstKey].schema ?? body.content![randomFirstKey]

  if (firstBody === undefined) {
    return null
  }

  const hasProperties = firstBody && typeof firstBody === 'object' && 'properties' in firstBody && firstBody.properties;
  const requiredArray = firstBody && typeof firstBody === 'object' && 'required' in firstBody && Array.isArray(firstBody.required) ? firstBody.required : [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Request</h3>
        <span className={styles.mimeType}>APPLICATION/JSON</span>
      </div>
      
      <div className={styles.bodyLabel}>
        BODY
        <span className={styles.requiredLabel}>REQUIRED</span>
      </div>

      {hasProperties && Object.entries(firstBody.properties).map(
        ([propName, propSchema]: [string, any]) => renderProperty(
          propName,
          propSchema,
          requiredArray.includes(propName)
        )
      )}
    </div>
  )
}

const RequestSchema: React.FC<Props> = (props) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <RequestSchemaComponent {...props} />
      }}
    </BrowserOnly>
  )
}

export default RequestSchema
