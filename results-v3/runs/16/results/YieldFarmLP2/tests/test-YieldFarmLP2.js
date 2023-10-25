const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2duaVWca = await YieldFarmLP2.new({from: accounts[0]});
		const addressxf0JXsl = accounts[1]
		const addressDgoify2 = accounts[1]
		const addressPCLWK0A = accounts[1]
		const addressIqp8wDc = accounts[0]
		const uintxGDYtIh = BigInt("1928")
		const addressMXAw4Ri = accounts[4]
		const addresso5hW2Sx = accounts[2]
		const addressW1owUD0 = await YieldFarmLP2duaVWca.initialize.call(addressIqp8wDc, addressPCLWK0A, addressDgoify2, addressxf0JXsl, {from: accounts[3]});
		const uintq8MuY9n = await YieldFarmLP2duaVWca.getEpochStake.call(addressMXAw4Ri, uintxGDYtIh, {from: accounts[3]});
		const uinturoqOMg = await YieldFarmLP2duaVWca.massHarvest.call({from: accounts[5]});
		const uintKiJML32 = await YieldFarmLP2duaVWca.claimable.call(addresso5hW2Sx, {from: accounts[2]});

		await expect(YieldFarmLP2duaVWca.initialize.call(addressIqp8wDc, addressPCLWK0A, addressDgoify2, addressxf0JXsl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2SGKyeSF = await YieldFarmLP2.new({from: accounts[3]});
		const uintZEnByR = BigInt("753")
		const uintNPAKvWG = BigInt("780")
		const addressGIJZv9Q = accounts[1]
		const uinteHLKf0R = BigInt("1051")
		const addressXh59Csf = accounts[3]
		const uintSkrUaSD = BigInt("1374")
		const addressrM64PXk = accounts[4]
		const uintDzcpJj = BigInt("484")
		const uintDkNiYi = await YieldFarmLP2SGKyeSF.getPoolSize.call(uintZEnByR, {from: accounts[1]});
		const uinthgYZPEs = await YieldFarmLP2SGKyeSF.getEpochStake.call(addressGIJZv9Q, uintNPAKvWG, {from: accounts[1]});
		const uintxt7VIlZ = await YieldFarmLP2SGKyeSF.getEpochStake.call(addressXh59Csf, uinteHLKf0R, {from: accounts[0]});
		const uintGFVHIwK = await YieldFarmLP2SGKyeSF.getEpochStake.call(addressrM64PXk, uintSkrUaSD, {from: accounts[4]});
		const uintGu8WmXa = await YieldFarmLP2SGKyeSF.harvest.call(uintDzcpJj, {from: accounts[2]});

		await expect(YieldFarmLP2SGKyeSF.getPoolSize.call(uintZEnByR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP21peO8P = await YieldFarmLP2.new({from: accounts[3]});
		const uintGclzfOi = BigInt("183")
		const addressbPkaTe = accounts[3]
		const addressbGc4MZv = accounts[5]
		const uintroQRllj = BigInt("1193")
		const addressYXJb86Q = accounts[4]
		const addressucGogeo = "0x0000000000000000000000000000000000000001"
		const uintrsEtxnc = await YieldFarmLP21peO8P.massHarvest.call({from: accounts[4]});
		const uint9jmGc4 = await YieldFarmLP21peO8P.getEpochStake.call(addressbPkaTe, uintGclzfOi, {from: accounts[3]});
		const uintssFSu6 = await YieldFarmLP21peO8P.claimable.call(addressbGc4MZv, {from: accounts[1]});
		const uintrs8Olf0 = await YieldFarmLP21peO8P.getEpochStake.call(addressYXJb86Q, uintroQRllj, {from: "0x0000000000000000000000000000000000000001"});
		const uint9qvayg = await YieldFarmLP21peO8P.getCurrentEpoch.call({from: accounts[2]});
		const uintk3EXD0X = await YieldFarmLP21peO8P.claimable.call(addressucGogeo, {from: accounts[5]});

		await expect(YieldFarmLP21peO8P.massHarvest.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2P2CyfNW = await YieldFarmLP2.new({from: accounts[3]});
		const addresstl3vy6t = accounts[4]
		const uintraPgX6D = BigInt("1979")
		const uintBP95aZx = await YieldFarmLP2P2CyfNW.claimable.call(addresstl3vy6t, {from: accounts[3]});
		const uintD99K8i2 = await YieldFarmLP2P2CyfNW.harvest.call(uintraPgX6D, {from: accounts[2]});
		const uintRx1negD = await YieldFarmLP2P2CyfNW.getCurrentEpoch.call({from: accounts[2]});
		const uintmpj5Gw = await YieldFarmLP2P2CyfNW.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2P2CyfNW.claimable.call(addresstl3vy6t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2kzNQVq4 = await YieldFarmLP2.new({from: accounts[4]});
		const uintuB9tTg3 = BigInt("105")
		const addressKJ9ztoo = accounts[1]
		const uintNWiHHp0 = BigInt("1498")
		const addressZJ8jRiK = accounts[2]
		const addressicPkfeJ = accounts[0]
		const addressAEzzSH = accounts[0]
		const uintsaLwPQw = BigInt("430")
		const uintq13X40u = await YieldFarmLP2kzNQVq4.getEpochStake.call(addressKJ9ztoo, uintuB9tTg3, {from: accounts[0]});
		const uinto3u1FUS = await YieldFarmLP2kzNQVq4.getEpochStake.call(addressZJ8jRiK, uintNWiHHp0, {from: accounts[1]});
		const uintjBD5daA = await YieldFarmLP2kzNQVq4.claimable.call(addressicPkfeJ, {from: accounts[0]});
		const uintULJi5Z = await YieldFarmLP2kzNQVq4.claimable.call(addressAEzzSH, {from: accounts[1]});
		const uintN01DtxT = await YieldFarmLP2kzNQVq4.massHarvest.call({from: accounts[1]});
		const uintpRZU2R = await YieldFarmLP2kzNQVq4.getPoolSize.call(uintsaLwPQw, {from: accounts[2]});

		await expect(YieldFarmLP2kzNQVq4.getEpochStake.call(addressKJ9ztoo, uintuB9tTg3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2mZizL6t = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPzNrqeH = BigInt("2021")
		const uintIt5eWO8 = BigInt("2042")
		const addressr0sDLV3 = accounts[5]
		const uintsONmWjP = await YieldFarmLP2mZizL6t.harvest.call(uintPzNrqeH, {from: accounts[2]});
		const uintstQqIIe = await YieldFarmLP2mZizL6t.getEpochStake.call(addressr0sDLV3, uintIt5eWO8, {from: accounts[4]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2H6p1MtM = await YieldFarmLP2.new({from: accounts[3]});
		const uintcljI0m3 = BigInt("1834")
		const uintYk1XqNv = BigInt("402")
		const uintJRuVxt = BigInt("361")
		const addressbjlBc0G = accounts[3]
		const uintfXlObg2 = await YieldFarmLP2H6p1MtM.userLastEpochIdHarvested.call({from: accounts[5]});
		const uintGAC61ht = await YieldFarmLP2H6p1MtM.getPoolSize.call(uintcljI0m3, {from: accounts[3]});
		const uintuzr9eOg = await YieldFarmLP2H6p1MtM.getPoolSize.call(uintYk1XqNv, {from: accounts[1]});
		const uintMhxySl4 = await YieldFarmLP2H6p1MtM.getEpochStake.call(addressbjlBc0G, uintJRuVxt, {from: accounts[2]});

		assert.equal(uintfXlObg2, BigInt("0"))
		await expect(YieldFarmLP2H6p1MtM.getPoolSize.call(uintcljI0m3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2TNiiRzH = await YieldFarmLP2.new({from: accounts[3]});
		const uintD6LlEBj = BigInt("1872")
		const uintOlRcrSM = BigInt("1954")
		const addressSkUC0v8 = accounts[2]
		const uintHy5skm = await YieldFarmLP2TNiiRzH.harvest.call(uintD6LlEBj, {from: accounts[3]});
		const uintYXwcCK5 = await YieldFarmLP2TNiiRzH.massHarvest.call({from: accounts[2]});
		const uintiXzoW8C = await YieldFarmLP2TNiiRzH.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintfx4i6LB = await YieldFarmLP2TNiiRzH.getPoolSize.call(uintOlRcrSM, {from: accounts[4]});
		const uintDuL2qqs = await YieldFarmLP2TNiiRzH.claimable.call(addressSkUC0v8, {from: accounts[2]});
		const uintlsOK1Qo = await YieldFarmLP2TNiiRzH.massHarvest.call({from: accounts[5]});
		const uintIUa5D6U = await YieldFarmLP2TNiiRzH.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2TNiiRzH.harvest.call(uintD6LlEBj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jf1TLMg = await YieldFarmLP2.new({from: accounts[0]});
		const addressB2Faj4 = accounts[0]
		const addressCcy6inG = accounts[1]
		const addressHU45MRu = accounts[1]
		const addressRZyFih = accounts[1]
		const address6uT5Z4 = accounts[2]
		const uintrDcwzI6 = BigInt("795")
		const addressryP1JDU = accounts[4]
		const uintOmK1Q9D = await YieldFarmLP2jf1TLMg.getCurrentEpoch.call({from: accounts[1]});
		const addresshoLsQ0 = await YieldFarmLP2jf1TLMg.initialize.call(addressRZyFih, addressHU45MRu, addressCcy6inG, addressB2Faj4, {from: accounts[4]});
		const uintA6wzo1t = await YieldFarmLP2jf1TLMg.claimable.call(address6uT5Z4, {from: "0x0000000000000000000000000000000000000001"});
		const uintsdtDg1Z = await YieldFarmLP2jf1TLMg.getEpochStake.call(addressryP1JDU, uintrDcwzI6, {from: accounts[1]});

		await expect(YieldFarmLP2jf1TLMg.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})