import React from 'react'
import Chart from '../../components/Chart'
import Authenticated from '../../Layout/Authenticated'
import { FormattedMessage } from "react-intl";
import Head from 'next/head'

function Dashboard() {
  return (
    <Authenticated>
      <div className="title-1 text-prime">
        {/* <FormattedMessage id="page.sidebar.das" />
        <iframe
          className='w-[1px] min-w-full h-[700px]'
          plausible-embed="true"
          src="https://plausible.io/share/uptech.vn?auth=zNqVp-x4ZPMNCrG0jx1UI&embed=true&theme=light"
          loading="lazy"></iframe>
        <Head>
          <script async src="https://plausible.io/js/embed.host.js"></script>
        </Head> */}
        <Chart />
      </div>
    </Authenticated>
  )
}

export default Dashboard
