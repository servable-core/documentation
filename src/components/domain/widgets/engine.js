import { Helmet } from "react-helmet"
import React from "react"

export default props => {
    const { id, size = 's', mode = "default" } = props
    return <div className="mb-6">
        <div id={id}
            data-id={id}
            data-mode={mode}
            class="servable-engine-widget"
        // style="width: 250px; margin: auto; margin-top: 20px"
        >
            <div className="bg-slate-200 
            rounded-xl 
            px-4 
            py-4 
            pt-14 
            min-h-44 
            min-w-sm ">
                <h4 className="">
                    Engine 
                    <br />
                    {`${id}`}
                    <br />
                    ...</h4>
            </div>
        </div>
        <Helmet>
            {/* <link href={process.env.WIDGETS_STYLE_URL} rel="stylesheet" />
            <script async src={process.env.WIDGETS_JS_URL}></script> */}
            <link href="https://cdn.servable.app/widgets/protocol/index.css" rel="stylesheet" />
            <script async src="https://cdn.servable.app/widgets/protocol/index.js"></script>
            {/* <link href="http://localhost:3080/widget/index.css" rel="stylesheet" />
            <script async src="http://localhost:3080/widget/index.js"></script> */}
        </Helmet>
    </div>
}