import { writable } from 'svelte/store'
import type { ComponentType } from 'svelte';

// Modals
import WalletsModal from './wallet.modal.svelte'

export type Modal = {
    component: ComponentType<
        WalletsModal
    >;
}

export type Modals = keyof typeof MODALS;

const MODALS: {
    [key: string]: Modal;
} = {
    "wallet": {
        component: WalletsModal,
    }
};

// Selected modal
export const modal = writable<Modal | null>(null);

export function openModal(name: Modals, props: any = {}) {
    modal.set({
        ...props,
        ...MODALS[name],
    });
}

// Clear all modals
export function clearModal() {
    modal.set(null);
}