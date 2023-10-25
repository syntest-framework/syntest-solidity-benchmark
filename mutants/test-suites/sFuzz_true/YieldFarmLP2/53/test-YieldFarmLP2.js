const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HC0XAev = await YieldFarmLP2.new({from: accounts[3]});
		const addressr01a0iV = accounts[1]
		const addressyQnyQ0L = accounts[2]
		const addressx27d5Yf = accounts[0]
		const addressyobrpmj = accounts[4]
		const addressgYC566 = accounts[2]
		const uintUcoalXM = BigInt("1840")
//		const addressm1eaY4P = await YieldFarmLP2HC0XAev.initialize.call(addressyobrpmj, addressx27d5Yf, addressyQnyQ0L, addressr01a0iV, {from: accounts[1]});
//		const uintHZDWr5c = await YieldFarmLP2HC0XAev.claimable.call(addressgYC566, {from: accounts[4]});
//		const uintv3LbW8D = await YieldFarmLP2HC0XAev.harvest.call(uintUcoalXM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2HC0XAev.initialize.call(addressyobrpmj, addressx27d5Yf, addressyQnyQ0L, addressr01a0iV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2x0kxPwK = await YieldFarmLP2.new({from: accounts[5]});
		const addressnYL7Vkh = accounts[2]
		const uintslirpHV = BigInt("2028")
		const addressGctpSbZ = accounts[4]
		const uintCllUEZD = BigInt("1947")
		const uintHJLYXLB = BigInt("868")
//		const uintDwMSPI0 = await YieldFarmLP2x0kxPwK.claimable.call(addressnYL7Vkh, {from: accounts[0]});
//		const uintz7ShWT4 = await YieldFarmLP2x0kxPwK.harvest.call(uintslirpHV, {from: accounts[4]});
//		const uintWwLthc6 = await YieldFarmLP2x0kxPwK.claimable.call(addressGctpSbZ, {from: accounts[3]});
//		const uintMASaI2 = await YieldFarmLP2x0kxPwK.getPoolSize.call(uintCllUEZD, {from: accounts[0]});
//		const uintQj37TIr = await YieldFarmLP2x0kxPwK.getPoolSize.call(uintHJLYXLB, {from: accounts[5]});

		await expect(YieldFarmLP2x0kxPwK.claimable.call(addressnYL7Vkh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UsuS45d = await YieldFarmLP2.new({from: accounts[2]});
		const uint6H8Fjg = BigInt("900")
		const uintfnzBUFD = BigInt("1629")
		const uinte00cSOm = BigInt("1681")
//		const uintZHUTwa = await YieldFarmLP2UsuS45d.getPoolSize.call(uint6H8Fjg, {from: accounts[3]});
//		const uintSQDz3qp = await YieldFarmLP2UsuS45d.getPoolSize.call(uintfnzBUFD, {from: accounts[4]});
//		const uintk3tiP82 = await YieldFarmLP2UsuS45d.userLastEpochIdHarvested.call({from: accounts[3]});
//		const uintJHNqr8n = await YieldFarmLP2UsuS45d.getPoolSize.call(uinte00cSOm, {from: accounts[4]});

		await expect(YieldFarmLP2UsuS45d.getPoolSize.call(uint6H8Fjg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP29k6UeV = await YieldFarmLP2.new({from: accounts[1]});
		const uintxaGy4Ry = BigInt("556")
		const uintZULzqdt = BigInt("404")
		const addressS8a16bo = accounts[1]
//		const uintTl6MkVc = await YieldFarmLP29k6UeV.harvest.call(uintxaGy4Ry, {from: accounts[1]});
//		const uintTiN8K6s = await YieldFarmLP29k6UeV.getEpochStake.call(addressS8a16bo, uintZULzqdt, {from: accounts[3]});

		await expect(YieldFarmLP29k6UeV.harvest.call(uintxaGy4Ry, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2hy4FMsm = await YieldFarmLP2.new({from: accounts[2]});
		const uintlGfHefc = BigInt("337")
		const uintiVBL1F2 = BigInt("433")
		const uintBaKdMZz = BigInt("2024")
		const addressdD1BOnY = "0x0000000000000000000000000000000000000001"
		const uintFlUsIN2 = await YieldFarmLP2hy4FMsm.userLastEpochIdHarvested.call({from: accounts[4]});
		const uintbT85l3m = await YieldFarmLP2hy4FMsm.userLastEpochIdHarvested.call({from: accounts[4]});
//		const uintjJ9zN58 = await YieldFarmLP2hy4FMsm.harvest.call(uintlGfHefc, {from: accounts[5]});
//		const uintryALPpg = await YieldFarmLP2hy4FMsm.getPoolSize.call(uintiVBL1F2, {from: accounts[0]});
//		const uintJBTIB7 = await YieldFarmLP2hy4FMsm.getEpochStake.call(addressdD1BOnY, uintBaKdMZz, {from: accounts[5]});

		assert.equal(uintFlUsIN2, BigInt("0"))
		assert.equal(uintbT85l3m, BigInt("0"))
		await expect(YieldFarmLP2hy4FMsm.harvest.call(uintlGfHefc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RRgJz1 = await YieldFarmLP2.new({from: accounts[3]});
		const uintQ2qvTQo = BigInt("1216")
//		const uintDhGP0Dm = await YieldFarmLP2RRgJz1.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintb4kXGIg = await YieldFarmLP2RRgJz1.getCurrentEpoch.call({from: accounts[4]});
//		const uintV4ZJvO = await YieldFarmLP2RRgJz1.harvest.call(uintQ2qvTQo, {from: accounts[5]});

		await expect(YieldFarmLP2RRgJz1.massHarvest.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RRgJz1 = await YieldFarmLP2.new({from: accounts[3]});
		const uintVtHk0C = BigInt("630")
		const addressYDOCxvk = accounts[0]
		const uintvtVtykI = BigInt("1499")
		const addressJjZgMgl = accounts[3]
		const uintN4qdr6a = BigInt("1216")
//		const uinty3UWSI8 = await YieldFarmLP2RRgJz1.getEpochStake.call(addressYDOCxvk, uintVtHk0C, {from: accounts[2]});
//		const uintDhGP0Dm = await YieldFarmLP2RRgJz1.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintsM5GOUv = await YieldFarmLP2RRgJz1.getEpochStake.call(addressJjZgMgl, uintvtVtykI, {from: accounts[2]});
//		const uintV4ZJvO = await YieldFarmLP2RRgJz1.harvest.call(uintN4qdr6a, {from: accounts[5]});

		await expect(YieldFarmLP2RRgJz1.getEpochStake.call(addressYDOCxvk, uintVtHk0C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2cd5W4D = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressICC4GxK = "0x0000000000000000000000000000000000000001"
		const uintl6MVQv = BigInt("1460")
		const uintLYDd0i = await YieldFarmLP2cd5W4D.massHarvest.call({from: accounts[4]});
		const uintxFiBKFp = await YieldFarmLP2cd5W4D.claimable.call(addressICC4GxK, {from: "0x0000000000000000000000000000000000000001"});
		const uintrazLwKc = await YieldFarmLP2cd5W4D.getPoolSize.call(uintl6MVQv, {from: accounts[0]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RRgJz1 = await YieldFarmLP2.new({from: accounts[3]});
		const addressD5YtODC = accounts[3]
		const addressJtXxzzB = accounts[2]
		const addressw8G8JmV = "0x0000000000000000000000000000000000000001"
		const addressI50SYNZ = "0x0000000000000000000000000000000000000001"
		const uintDkLU8tM = BigInt("1111")
//		const uint34WEvu = await YieldFarmLP2RRgJz1.getCurrentEpoch.call({from: accounts[3]});
//		const addresshRtgXB = await YieldFarmLP2RRgJz1.initialize.call(addressI50SYNZ, addressw8G8JmV, addressJtXxzzB, addressD5YtODC, {from: "0x0000000000000000000000000000000000000001"});
//		const uintV4ZJvO = await YieldFarmLP2RRgJz1.harvest.call(uintDkLU8tM, {from: accounts[5]});

		await expect(YieldFarmLP2RRgJz1.getCurrentEpoch.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})