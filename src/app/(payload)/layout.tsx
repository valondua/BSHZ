/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import fullConfig from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'

import adminConfig from '@/payload.admin.config'
import { importMap } from './admin/importMap'
import '@payloadcms/next/css'

export const maxDuration = 60

type Args = {
  children: React.ReactNode
}

const serverFunction = async function (args: { name: string; args: Record<string, unknown> }) {
  'use server'
  return handleServerFunctions({
    ...args,
    config: fullConfig,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={adminConfig} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
