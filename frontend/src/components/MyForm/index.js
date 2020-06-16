export default function MyForm() {
    const formRef = useRef(null);

    useEffect(() => {
        someApiCall().then((user) => {
            formRef.current.setData({ email: user.email });
        });
    }, []);

    return (
        <Form ref={formRef}>
            <Input name='email' />
        </Form>
    );
}
