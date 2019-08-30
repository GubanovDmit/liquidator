const mainnetNetwork = 'mainnet';

class KeeperAdapterConstructor {

    constructor() {
        WavesKeeper.on('update', state => {
            console.warn(state);
        });
    }

    public getLoggedState() {
        return this.publicState()
            .then((data: WavesKeeper.IPublicStateResponse) => {
                if (data.account && data.account.address && data.account.network === mainnetNetwork) {
                    return true;
                }
                return false;
            })
            .catch(() => false);
    }

    public publicState(): Promise<WavesKeeper.IPublicStateResponse> {
        return WavesKeeper.publicState()
            .then((data) => data)
            .catch((e): Promise<never> => {
                if (e.message === 'Init Waves Keeper and add account') {
                    console.log('Init Waves Keeper and add account');
                    return Promise.reject(false);
                }
                if (e.message === 'Add Waves Keeper account') {
                    console.log('Add Waves Keeper account');
                    return Promise.reject(false);
                }
                console.log('User denied message');
                return Promise.reject(false);
            });
    }
}

export const KeeperAdapter = new KeeperAdapterConstructor();
