const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2swmC9Ze = await YieldFarmLP2.new({from: accounts[1]});
		const uintqCywkpx = BigInt("1525")
		const addressPrOR1jM = accounts[3]
		const addressnZcVvy = accounts[4]
		const addressTEUlMoB = accounts[3]
		const addresslmXWQa = "0x0000000000000000000000000000000000000001"
		const addressoRSFUpe = accounts[2]
		const addressT7s91rI = accounts[4]
		const uintEkqB3nU = await YieldFarmLP2swmC9Ze.getCurrentEpoch.call({from: accounts[0]});
		const uintBS1s2YC = await YieldFarmLP2swmC9Ze.getEpochStake.call(addressPrOR1jM, uintqCywkpx, {from: accounts[5]});
		const addressenp9brf = await YieldFarmLP2swmC9Ze.initialize.call(addressoRSFUpe, addresslmXWQa, addressTEUlMoB, addressnZcVvy, {from: accounts[5]});
		const uintsyKFucE = await YieldFarmLP2swmC9Ze.claimable.call(addressT7s91rI, {from: accounts[3]});

		await expect(YieldFarmLP2swmC9Ze.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2d8zzoi = await YieldFarmLP2.new({from: accounts[5]});
		const uintRGAgmzE = BigInt("1199")
		const addressJhJbW4X = accounts[2]
		const uintxCIMZJm = BigInt("975")
		const addressPnc0wHM = accounts[1]
		const uintpQTEdiU = await YieldFarmLP2d8zzoi.getPoolSize.call(uintRGAgmzE, {from: accounts[2]});
		const uintazMunNE = await YieldFarmLP2d8zzoi.claimable.call(addressJhJbW4X, {from: accounts[2]});
		const uintF54nShv = await YieldFarmLP2d8zzoi.getPoolSize.call(uintxCIMZJm, {from: accounts[4]});
		const uintdChHeYU = await YieldFarmLP2d8zzoi.getCurrentEpoch.call({from: accounts[2]});
		const uintM9lYAFb = await YieldFarmLP2d8zzoi.claimable.call(addressPnc0wHM, {from: accounts[3]});

		await expect(YieldFarmLP2d8zzoi.getPoolSize.call(uintRGAgmzE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2BZcCwIu = await YieldFarmLP2.new({from: accounts[4]});
		const uintmVmADwU = await YieldFarmLP2BZcCwIu.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintwtAUyEj = await YieldFarmLP2BZcCwIu.getCurrentEpoch.call({from: accounts[5]});

		assert.equal(uintmVmADwU, BigInt("0"))
		await expect(YieldFarmLP2BZcCwIu.getCurrentEpoch.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LSmKvYD = await YieldFarmLP2.new({from: accounts[2]});
		const addressODxLLVA = accounts[2]
		const uintZknhau0 = BigInt("656")
		const uintdoEekSY = await YieldFarmLP2LSmKvYD.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
		const uintxybaUOK = await YieldFarmLP2LSmKvYD.claimable.call(addressODxLLVA, {from: accounts[0]});
		const uintJbOjbVM = await YieldFarmLP2LSmKvYD.massHarvest.call({from: accounts[3]});
		const uintWDCgIDB = await YieldFarmLP2LSmKvYD.harvest.call(uintZknhau0, {from: accounts[4]});

		assert.equal(uintdoEekSY, BigInt("0"))
		await expect(YieldFarmLP2LSmKvYD.claimable.call(addressODxLLVA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2T5VcCj3 = await YieldFarmLP2.new({from: accounts[5]});
		const addressvRJ77qx = accounts[3]
		const addressyZsftEX = accounts[1]
		const addresso42E5u0 = accounts[5]
		const addressCEMwAJa = accounts[2]
		const addressPP9IyGD = accounts[3]
		const uintztB5kLw = BigInt("386")
		const addresshgfpeO1 = await YieldFarmLP2T5VcCj3.initialize.call(addressCEMwAJa, addresso42E5u0, addressyZsftEX, addressvRJ77qx, {from: accounts[0]});
		const uintG6iXqk2 = await YieldFarmLP2T5VcCj3.claimable.call(addressPP9IyGD, {from: accounts[2]});
		const uintxjPAfc = await YieldFarmLP2T5VcCj3.getPoolSize.call(uintztB5kLw, {from: accounts[4]});

		await expect(YieldFarmLP2T5VcCj3.initialize.call(addressCEMwAJa, addresso42E5u0, addressyZsftEX, addressvRJ77qx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2yZ7lt8Y = await YieldFarmLP2.new({from: accounts[2]});
		const uintxWCL0lB = BigInt("1162")
		const addresskdrjI4q = accounts[3]
		const uintI00E1r = BigInt("740")
		const uintreiNH5u = BigInt("671")
		const addressEtfZMlw = accounts[3]
		const uintVUajGmn = await YieldFarmLP2yZ7lt8Y.getEpochStake.call(addresskdrjI4q, uintxWCL0lB, {from: accounts[5]});
		const uintDxnhv4w = await YieldFarmLP2yZ7lt8Y.harvest.call(uintI00E1r, {from: accounts[4]});
		const uintut0CIp4 = await YieldFarmLP2yZ7lt8Y.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
		const uintZfcc3c = await YieldFarmLP2yZ7lt8Y.getCurrentEpoch.call({from: accounts[1]});
		const uintxPYHWqM = await YieldFarmLP2yZ7lt8Y.getEpochStake.call(addressEtfZMlw, uintreiNH5u, {from: accounts[1]});

		await expect(YieldFarmLP2yZ7lt8Y.getEpochStake.call(addresskdrjI4q, uintxWCL0lB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2BZcCwIu = await YieldFarmLP2.new({from: accounts[4]});
		const uintTkmSLdg = BigInt("1712")
		const uintYfg43ED = await YieldFarmLP2BZcCwIu.harvest.call(uintTkmSLdg, {from: accounts[3]});
		const uintwtAUyEj = await YieldFarmLP2BZcCwIu.getCurrentEpoch.call({from: accounts[5]});
		const uintEpQUcoo = await YieldFarmLP2BZcCwIu.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2BZcCwIu.harvest.call(uintTkmSLdg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2XO6cInO = await YieldFarmLP2.new({from: accounts[3]});
		const addressFSjStR4 = accounts[2]
		const uinte0I5hA5 = await YieldFarmLP2XO6cInO.massHarvest.call({from: accounts[0]});
		const uintm5fK4qZ = await YieldFarmLP2XO6cInO.getCurrentEpoch.call({from: accounts[3]});
		const uintnDurJK = await YieldFarmLP2XO6cInO.claimable.call(addressFSjStR4, {from: accounts[0]});
		const uintEm3WXPL = await YieldFarmLP2XO6cInO.userLastEpochIdHarvested.call({from: accounts[5]});
		const uinteFKOvHI = await YieldFarmLP2XO6cInO.userLastEpochIdHarvested.call({from: accounts[1]});

		await expect(YieldFarmLP2XO6cInO.massHarvest.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2gXaOvp = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMsX9NvH = accounts[1]
		const uintntg8II5 = BigInt("12")
		const address0XQezB = accounts[5]
		const uintfj6trgq = await YieldFarmLP2gXaOvp.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
		const uintePhWTz7 = await YieldFarmLP2gXaOvp.claimable.call(addressMsX9NvH, {from: accounts[1]});
		const uintkovQTs = await YieldFarmLP2gXaOvp.getCurrentEpoch.call({from: accounts[4]});
		const uintRD3x9Sf = await YieldFarmLP2gXaOvp.harvest.call(uintntg8II5, {from: accounts[0]});
		const uintn7Wt2pI = await YieldFarmLP2gXaOvp.claimable.call(address0XQezB, {from: accounts[2]});
	});
})