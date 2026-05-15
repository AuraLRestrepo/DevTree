import mongoose from 'mongoose';
import colors from 'colors';

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log(colors.bgMagenta.bold(`Mongo DB conectado!!!`));
    } catch (error) {
        console.error(colors.bgRed.white.bold(error.message));
        process.exit(1)
    }
}