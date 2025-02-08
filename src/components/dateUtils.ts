export class DateUtils {
    private static readonly DEFAULT_LOCALE = 'en-GB';

    /**
     * Formats a date string to DD/MM/YYYY
     */
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

    /**
     * Formats time to HH:mm format (24 hour)
     */
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

    /**
     * Formats date and time together as DD/MM/YYYY HH:mm
     */
    static formatDateTime(dateString: string | Date): string {
        if (!dateString) return '';

        const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

        if (isNaN(date.getTime())) return '';

        return `${this.formatDate(date)} ${this.formatTime(date)}`;
    }

    /**
     * Creates a date key in YYYY-MM-DD format for grouping/sorting
     */
    static getDateKey(dateString: string | Date): string {
        if (!dateString) return '';

        const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

        if (isNaN(date.getTime())) return '';

        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    /**
     * Compares two dates for sorting (newer dates first)
     */
    static compareDatesDesc(dateA: string | Date, dateB: string | Date): number {
        const a = typeof dateA === 'string' ? new Date(dateA) : dateA;
        const b = typeof dateB === 'string' ? new Date(dateB) : dateB;
        return b.getTime() - a.getTime();
    }

    /**
     * Checks if a date string is valid
     */
    static isValidDate(dateString: string | Date): boolean {
        if (!dateString) return false;

        const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
        return !isNaN(date.getTime());
    }

    /**
     * Converts a date to HTML date input format (YYYY-MM-DD)
     */
    static toHtmlDate(dateString: string | Date | null): string {
        if (!dateString) return '';

        const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
        if (isNaN(date.getTime())) return '';

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    /**
     * Converts an HTML date input value to our standard date format
     */
    static fromHtmlDate(htmlDate: string): string {
        if (!htmlDate) return '';

        const [year, month, day] = htmlDate.split('-');
        return `${day}/${month}/${year}`;
    }
}