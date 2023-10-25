const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractUungPW5 = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueLXcgTA9 = BigInt("1727")
		const valueE2dBwp3 = BigInt("1520")
		const valueuj1KZy2 = BigInt("1141")
		const dstjJIyVoZ = accounts[1]
		const srcnSUOf7E = accounts[2]
		const valueK2KUJah = BigInt("1167")
		await contractUungPW5.deposit.call(valueLXcgTA9, {from: accounts[4]});
		await contractUungPW5.deposit.call(valueE2dBwp3, {from: accounts[1]});
		const nullWNKwj7g = await contractUungPW5.transferFrom.call(srcnSUOf7E, dstjJIyVoZ, valueuj1KZy2, {from: accounts[1]});
		await contractUungPW5.exit.call({from: accounts[5]});
		await contractUungPW5.withdraw.call(valueK2KUJah, {from: accounts[4]});

		await expect(contractUungPW5.deposit.call(valueLXcgTA9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractdwcPllw = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountG2zkKUK = accounts[3]
		const valueJqxwiKw = BigInt("268")
		const dstScOaOs8 = accounts[4]
		const srcscJC2GI = "0x0000000000000000000000000000000000000001"
		const valueNCrSsMu = BigInt("1423")
		const valuet9JmLyy = BigInt("723")
		const nullV7dKGR9 = await contractdwcPllw.claimable.call(accountG2zkKUK, {from: accounts[2]});
		const nullYEjqyQT = await contractdwcPllw.transferFrom.call(srcscJC2GI, dstScOaOs8, valueJqxwiKw, {from: accounts[1]});
		await contractdwcPllw.withdraw.call(valueNCrSsMu, {from: "0x0000000000000000000000000000000000000001"});
		await contractdwcPllw.withdraw.call(valuet9JmLyy, {from: accounts[0]});
		const nullERpEBZJ = await contractdwcPllw.claim.call({from: accounts[0]});
		const nullefH2k5p = await contractdwcPllw.claim.call({from: accounts[1]});

		assert.equal(nullV7dKGR9, 0)
		await expect(contractdwcPllw.transferFrom.call(srcscJC2GI, dstScOaOs8, valueJqxwiKw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractaP6nTK = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueGVnqVc2 = BigInt("1014")
		const spendervk0prWa = accounts[0]
		const valueqxe7GpH = BigInt("1485")
		const spenderkKspXmJ = accounts[2]
		const accountyfaMCYS = accounts[4]
		const valueTXSpl87 = BigInt("1311")
		const spenderaKTV2o8 = accounts[0]
		await contractaP6nTK.exit.call({from: accounts[5]});
		const nullgB3tSQl = await contractaP6nTK.approve.call(spendervk0prWa, valueGVnqVc2, {from: accounts[3]});
		const nullfmfi65i = await contractaP6nTK.approve.call(spenderkKspXmJ, valueqxe7GpH, {from: accounts[1]});
		const nullyPlMWj7 = await contractaP6nTK.claimable.call(accountyfaMCYS, {from: accounts[3]});
		const nullbNsa3Yv = await contractaP6nTK.approve.call(spenderaKTV2o8, valueTXSpl87, {from: accounts[1]});

		await expect(contractaP6nTK.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractopg56jo = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountDW9gXQN = accounts[4]
		const valueQshx53 = BigInt("390")
		const dstFcXfgRa = accounts[1]
		const srcPTKIo8k = accounts[0]
		const valuecPz47sD = BigInt("876")
		const nullgjld2Ld = await contractopg56jo.claim.call({from: accounts[4]});
		const nullp0s7brF = await contractopg56jo.claimable.call(accountDW9gXQN, {from: accounts[5]});
		const nullnsbWgkB = await contractopg56jo.transferFrom.call(srcPTKIo8k, dstFcXfgRa, valueQshx53, {from: accounts[1]});
		await contractopg56jo.deposit.call(valuecPz47sD, {from: accounts[4]});

		assert.equal(nullgjld2Ld, 0)
		assert.equal(nullp0s7brF, 0)
		await expect(contractopg56jo.transferFrom.call(srcPTKIo8k, dstFcXfgRa, valueQshx53, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractTKCfw8v = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueKclWSd1 = BigInt("1486")
		const dstX2jhg8g = accounts[5]
		const valueThKBVfl = BigInt("1939")
		const nullcd8QvsC = await contractTKCfw8v.transfer.call(dstX2jhg8g, valueKclWSd1, {from: accounts[0]});
		await contractTKCfw8v.deposit.call(valueThKBVfl, {from: accounts[3]});

		await expect(contractTKCfw8v.transfer.call(dstX2jhg8g, valueKclWSd1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractNlqkZ8I = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountoVEtamp = accounts[4]
		const valueroQg4b4 = BigInt("346")
		const spender18z23m = accounts[0]
		const valueZSgeUUY = BigInt("876")
		const nullbbC4ZOZ = await contractNlqkZ8I.claim.call({from: accounts[4]});
		const nullVyMOv9U = await contractNlqkZ8I.claimable.call(accountoVEtamp, {from: accounts[5]});
		const nullQ4K1yG8 = await contractNlqkZ8I.approve.call(spender18z23m, valueroQg4b4, {from: accounts[1]});
		await contractNlqkZ8I.exit.call({from: accounts[3]});
		await contractNlqkZ8I.deposit.call(valueZSgeUUY, {from: accounts[4]});

		assert.equal(nullQ4K1yG8, true)
		assert.equal(nullVyMOv9U, 0)
		assert.equal(nullbbC4ZOZ, 0)
		await expect(contractNlqkZ8I.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractvHrHVL = await VBZRXWrapper_alt.new({from: accounts[4]});
		const toggleTuDcbYO = false
		const addrzx8w9d = accounts[1]
		const accountNxZnJzd = accounts[3]
		const valueEZltzik = BigInt("1155")
		await contractvHrHVL.setBridge.call(addrzx8w9d, toggleTuDcbYO, {from: accounts[4]});
		const nullyBKsd7f = await contractvHrHVL.claimable.call(accountNxZnJzd, {from: accounts[2]});
		await contractvHrHVL.deposit.call(valueEZltzik, {from: accounts[1]});

		assert.equal(nullyBKsd7f, 0)
		await expect(contractvHrHVL.claimable.call(accountNxZnJzd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractDIDHuoU = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuemMSj0ku = BigInt("1961")
		const spendermaCXpcW = accounts[2]
		const valueiiBKS8 = BigInt("1418")
		const spenderZJm2KJe = "0x0000000000000000000000000000000000000001"
		const valuewGCMvxz = BigInt("1021")
		const nulldjFBPIQ = await contractDIDHuoU.approve.call(spendermaCXpcW, valuemMSj0ku, {from: accounts[5]});
		const nullUVzAJgk = await contractDIDHuoU.claim.call({from: accounts[3]});
		const nullvqdXBw5 = await contractDIDHuoU.approve.call(spenderZJm2KJe, valueiiBKS8, {from: accounts[0]});
		await contractDIDHuoU.deposit.call(valuewGCMvxz, {from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractArWnUuQ = await VBZRXWrapper_alt.new({from: accounts[4]});
		const togglePIunevp = true
		const addreeOQ6L9 = accounts[5]
		const valueFFYiX0M = BigInt("1630")
		const dstvGO6N90 = accounts[1]
		const srcbNYdsFb = accounts[3]
		const value2mZwU8 = BigInt("1149")
		await contractArWnUuQ.setBridge.call(addreeOQ6L9, togglePIunevp, {from: accounts[1]});
		const nullvgXGmq4 = await contractArWnUuQ.transferFrom.call(srcbNYdsFb, dstvGO6N90, valueFFYiX0M, {from: accounts[0]});
		await contractArWnUuQ.withdraw.call(value2mZwU8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractArWnUuQ.setBridge.call(addreeOQ6L9, togglePIunevp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})