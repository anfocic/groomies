export class DateUtils {
    private static readonly DEFAULT_LOCALE = 'en-GB';

    static formatDate(dateString: string | Date): string {
        if (!dateString) return '-';

        const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

        if (isNaN(date.getTime())) return '';

        return date.toLocaleDateString(this.DEFAULT_LOCALE, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }

    static formatTime(dateString: string | Date): string {
        if (!dateString) return '';

        const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

        if (isNaN(date.getTime())) return '';

        return date.toLocaleTimeString(this.DEFAULT_LOCALE, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }

    static formatDateTime(dateString: string | Date): string {
        if (!dateString) return '';

        const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

        if (isNaN(date.getTime())) return '';

        return `${this.formatDate(date)} ${this.formatTime(date)}`;
    }
}