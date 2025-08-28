export function validateJobDescription(input) {
    if (typeof input !== 'string' || !input) return false;

    let s = input.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    s = s.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');
    s = s.replace(/<\/?[^>]+(>|$)/g, '');
    s = s.replace(/\s+/g, '').trim();
    return s;
}