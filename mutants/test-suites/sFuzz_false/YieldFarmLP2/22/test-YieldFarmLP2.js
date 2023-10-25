const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP22HgZl6 = await YieldFarmLP2.new({from: accounts[1]});
		const uintoObEHrT = BigInt("2038")
		const addressrrXOn7 = accounts[3]
		const uintPF62pU4 = BigInt("366")
		const addressWRZM1M = accounts[4]
		const uintypDJ0Fq = BigInt("196")
//		const uintddjzq3D = await YieldFarmLP22HgZl6.getPoolSize.call(uintoObEHrT, {from: accounts[3]});
//		const uintTeszuMa = await YieldFarmLP22HgZl6.claimable.call(addressrrXOn7, {from: accounts[2]});
//		const uintnZUNmGv = await YieldFarmLP22HgZl6.userLastEpochIdHarvested.call({from: accounts[2]});
//		const uintNEbcbhR = await YieldFarmLP22HgZl6.getEpochStake.call(addressWRZM1M, uintPF62pU4, {from: accounts[3]});
//		const uintUdfxiQV = await YieldFarmLP22HgZl6.getPoolSize.call(uintypDJ0Fq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP22HgZl6.getPoolSize.call(uintoObEHrT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2x1iYpO = await YieldFarmLP2.new({from: accounts[0]});
		const addressS9pyQsu = accounts[1]
		const uintigP0aqM = BigInt("800")
//		const uinttdbcu7h = await YieldFarmLP2x1iYpO.claimable.call(addressS9pyQsu, {from: accounts[1]});
//		const uintwS6RqhJ = await YieldFarmLP2x1iYpO.harvest.call(uintigP0aqM, {from: accounts[2]});
//		const uintesaFdo = await YieldFarmLP2x1iYpO.massHarvest.call({from: accounts[3]});

		await expect(YieldFarmLP2x1iYpO.claimable.call(addressS9pyQsu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2bOgqRgT = await YieldFarmLP2.new({from: accounts[2]});
		const uintKNmELEs = BigInt("1470")
		const uintXHIUmpB = BigInt("376")
//		const uint4L42SW = await YieldFarmLP2bOgqRgT.harvest.call(uintKNmELEs, {from: accounts[4]});
//		const uintcOZyPGN = await YieldFarmLP2bOgqRgT.harvest.call(uintXHIUmpB, {from: accounts[1]});

		await expect(YieldFarmLP2bOgqRgT.harvest.call(uintKNmELEs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2aSPPdyA = await YieldFarmLP2.new({from: accounts[4]});
		const addressC3CpgER = accounts[4]
		const addressIu7KKKJ = accounts[0]
		const addresstQDIbPk = accounts[2]
		const addressnVNAkrG = accounts[5]
		const uintfqen2cG = BigInt("1045")
		const uintMnDFvTj = BigInt("1828")
		const addresstnC7QwX = accounts[4]
//		const addressELBaHxA = await YieldFarmLP2aSPPdyA.initialize.call(addressnVNAkrG, addresstQDIbPk, addressIu7KKKJ, addressC3CpgER, {from: accounts[5]});
//		const uintNYEFmho = await YieldFarmLP2aSPPdyA.getPoolSize.call(uintfqen2cG, {from: accounts[0]});
//		const uintVwfaPlr = await YieldFarmLP2aSPPdyA.getEpochStake.call(addresstnC7QwX, uintMnDFvTj, {from: accounts[0]});

		await expect(YieldFarmLP2aSPPdyA.initialize.call(addressnVNAkrG, addresstQDIbPk, addressIu7KKKJ, addressC3CpgER, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2TkMMVtg = await YieldFarmLP2.new({from: accounts[2]});
		const addressH8IVD6U = accounts[0]
		const uintFPSyGIR = BigInt("1085")
//		const uintPNYhjvZ = await YieldFarmLP2TkMMVtg.massHarvest.call({from: accounts[2]});
//		const uint8vwJbu = await YieldFarmLP2TkMMVtg.claimable.call(addressH8IVD6U, {from: accounts[1]});
//		const uintC8WWH8D = await YieldFarmLP2TkMMVtg.harvest.call(uintFPSyGIR, {from: accounts[4]});

		await expect(YieldFarmLP2TkMMVtg.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZCbktOs = await YieldFarmLP2.new({from: accounts[1]});
		const addressXHQKzS = accounts[3]
		const addressN2Yokko = accounts[1]
		const addresso2LxjIG = accounts[4]
		const addresshINQrHI = accounts[2]
		const uintrL91c7x = await YieldFarmLP2ZCbktOs.userLastEpochIdHarvested.call({from: accounts[4]});
//		const uintzxS1RM1 = await YieldFarmLP2ZCbktOs.getCurrentEpoch.call({from: accounts[0]});
//		const addressJ3Nhm6 = await YieldFarmLP2ZCbktOs.initialize.call(addresshINQrHI, addresso2LxjIG, addressN2Yokko, addressXHQKzS, {from: accounts[4]});
//		const uintaBSz91g = await YieldFarmLP2ZCbktOs.userLastEpochIdHarvested.call({from: accounts[0]});

		assert.equal(uintrL91c7x, BigInt("0"))
		await expect(YieldFarmLP2ZCbktOs.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2TkMMVtg = await YieldFarmLP2.new({from: accounts[2]});
		const uintStag971 = BigInt("1311")
		const addresswblKehl = accounts[5]
		const uintIDgm08T = BigInt("470")
		const uintjzUQ4q5 = BigInt("1076")
//		const uintP9WV4qL = await YieldFarmLP2TkMMVtg.getEpochStake.call(addresswblKehl, uintStag971, {from: accounts[0]});
//		const uintfyMh0ed = await YieldFarmLP2TkMMVtg.getPoolSize.call(uintIDgm08T, {from: accounts[0]});
//		const uintC8WWH8D = await YieldFarmLP2TkMMVtg.harvest.call(uintjzUQ4q5, {from: accounts[4]});

		await expect(YieldFarmLP2TkMMVtg.getEpochStake.call(addresswblKehl, uintStag971, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JwXbWMi = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyS84IB = BigInt("195")
		const addressXJjx3I = "0x0000000000000000000000000000000000000001"
		const uintQRTF09 = BigInt("764")
		const addressEZ5oAY8 = accounts[3]
		const uintbhq2NbK = await YieldFarmLP2JwXbWMi.harvest.call(uintyS84IB, {from: accounts[3]});
		const uintE5Db3Hn = await YieldFarmLP2JwXbWMi.claimable.call(addressXJjx3I, {from: accounts[4]});
		const uintksZL8iR = await YieldFarmLP2JwXbWMi.getCurrentEpoch.call({from: accounts[1]});
		const uintcJ3s1LA = await YieldFarmLP2JwXbWMi.getEpochStake.call(addressEZ5oAY8, uintQRTF09, {from: accounts[3]});
		const uintRYs4oyr = await YieldFarmLP2JwXbWMi.massHarvest.call({from: accounts[0]});
	});
})