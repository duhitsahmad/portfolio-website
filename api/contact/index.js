module.exports = async function (context, req) {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
        context.res = { status: 400, body: { error: "Please provide all details." } };
        return;
    }

    context.log(`New message from ${name} (${email}): ${message}`);

    context.res = {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: { success: true, message: `Thank you ${name}, your message was received via Azure!` }
    };
};