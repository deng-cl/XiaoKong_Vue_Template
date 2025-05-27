export default function TestTsxComponent(props, context) {
    console.log('TestTsxComponent:', props, context)
    return (
        <div class={'text-red font-sans m-2 flex-c'}>
            <h1>TestTsxComponent {props.age}</h1>
        </div>
    )
}

TestTsxComponent.props = {
    name: { type: String },
}
