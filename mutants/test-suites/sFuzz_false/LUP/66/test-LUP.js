const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringk8cX3uW = "W3dcgo8M16mUmJtxi03FI0xrB675sUjyholTpdysVDXIC3A7tCvb51hMqQYEQq8eIYzhNp4iYoc"
		const stringevjAuw6 = "eUgbK8xyUfJujeyxQ5maPwATs"
		const uintK0o8Fqn = BigInt("243")
		const LUPCuLSwUz = await LUP.new(stringk8cX3uW, stringevjAuw6, uintK0o8Fqn, {from: accounts[2]});
		const addressCzom41E = accounts[4]
		const uintRX6C5gZ = BigInt("1558")
		const addressXjcyTMd = accounts[1]
		const uintyX76S66 = BigInt("1038")
		const addressU24EhhP = accounts[0]
		const uint256ILGkivF = await LUPCuLSwUz.balanceOf.call(addressCzom41E, {from: accounts[1]});
		const booluTC06Cx = await LUPCuLSwUz.transfer.call(addressXjcyTMd, uintRX6C5gZ, {from: accounts[0]});
		const boolmFN9umr = await LUPCuLSwUz.transfer.call(addressU24EhhP, uintyX76S66, {from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUP6XLI7R = await LUP.new({from: accounts[0]});
		const addressX3uDgdt = accounts[5]
		const uintqZG9pAv = BigInt("222")
		const addressRdQczio = accounts[0]
		const uint256HX8wgYh = await LUP6XLI7R.balanceOf.call(addressX3uDgdt, {from: accounts[4]});
		const stringRjXZIJu = await LUP6XLI7R.symbol.call({from: accounts[3]});
//		const boolvbLO7HA = await LUP6XLI7R.unlock.call(addressRdQczio, uintqZG9pAv, {from: accounts[4]});

		assert.equal(stringRjXZIJu, "LUP")
		assert.equal(uint256HX8wgYh, BigInt("0"))
		await expect(LUP6XLI7R.unlock.call(addressRdQczio, uintqZG9pAv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const addressTbi7cxg = accounts[2]
		const uintmERClEW = BigInt("1693")
		const uinta07zMeg = BigInt("389")
		const addresstq2l5Ba = accounts[5]
		const uint256e64FWY6 = await LUPTSVpo8j.balanceOf.call(addressTbi7cxg, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhaxJTro = await LUPTSVpo8j.lock.call(addresstq2l5Ba, uinta07zMeg, uintmERClEW, {from: accounts[2]});

		assert.equal(uint256e64FWY6, BigInt("50000000000000000000000000"))
		await expect(LUPTSVpo8j.lock.call(addresstq2l5Ba, uinta07zMeg, uintmERClEW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPxO2tAyB = await LUP.new({from: accounts[3]});
		const boolLCG1wCy = false
		const addressb3nsTRG = accounts[4]
		const stringUDG5H4 = await LUPxO2tAyB.name.call({from: accounts[3]});
//		const bools19dlpC = await LUPxO2tAyB.freezeAccount.call(addressb3nsTRG, boolLCG1wCy, {from: accounts[1]});

		assert.equal(stringUDG5H4, "LINKUP Token")
		await expect(LUPxO2tAyB.freezeAccount.call(addressb3nsTRG, boolLCG1wCy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const addressDzqN954 = accounts[3]
		const uintr1GozZc = BigInt("122")
		const addressulKa9C1 = accounts[0]
		const uintuP38pgL = BigInt("1318")
		const addressEaEOniL = accounts[3]
		const uintnNwa4HG = BigInt("1693")
		const uint63MJah = BigInt("389")
		const addressIe3rQQ = accounts[5]
		const uint256e64FWY6 = await LUPTSVpo8j.balanceOf.call(addressDzqN954, {from: "0x0000000000000000000000000000000000000001"});
		const boolj3uJRR6 = await LUPTSVpo8j.transfer.call(addressulKa9C1, uintr1GozZc, {from: accounts[2]});
//		const boolvGFlmIb = await LUPTSVpo8j.transfer.call(addressEaEOniL, uintuP38pgL, {from: accounts[5]});
//		const boolhaxJTro = await LUPTSVpo8j.lock.call(addressIe3rQQ, uint63MJah, uintnNwa4HG, {from: accounts[2]});

		assert.equal(boolj3uJRR6, true)
		assert.equal(uint256e64FWY6, BigInt("0"))
		await expect(LUPTSVpo8j.transfer.call(addressEaEOniL, uintuP38pgL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const addressPcJ1b7W = accounts[3]
		const addressE74tOk = "0x0000000000000000000000000000000000000001"
		const addressrtE2lhc = accounts[2]
//		const addresslAbHqPb = await LUPTSVpo8j.upgradeTo.call(addressPcJ1b7W, {from: accounts[1]});
//		const addressU9pczYs = await LUPTSVpo8j.notFrozen.call(addressE74tOk, {from: accounts[4]});
//		const uint256e64FWY6 = await LUPTSVpo8j.balanceOf.call(addressrtE2lhc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPTSVpo8j.upgradeTo.call(addressPcJ1b7W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const uint26ewsY = BigInt("1629")
		const addressChheu2 = accounts[0]
		const addressXtrje1 = accounts[3]
		const addresstm6Qxy = accounts[0]
		const uintKTQjuD2 = BigInt("1693")
		const uintwA07Jq = BigInt("389")
		const addresslwF0d45 = accounts[5]
		const uint8TEVWXMy = await LUPTSVpo8j.decimals.call({from: accounts[5]});
//		const boolRQG1MpG = await LUPTSVpo8j.transfer.call(addressChheu2, uint26ewsY, {from: accounts[0]});
//		const uint256e64FWY6 = await LUPTSVpo8j.balanceOf.call(addressXtrje1, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNmXZ3yl = await LUPTSVpo8j.notFrozen.call(addresstm6Qxy, {from: accounts[4]});
//		const boolhaxJTro = await LUPTSVpo8j.lock.call(addresslwF0d45, uintwA07Jq, uintKTQjuD2, {from: accounts[2]});

		assert.equal(uint8TEVWXMy, BigInt("18"))
		await expect(LUPTSVpo8j.transfer.call(addressChheu2, uint26ewsY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const uinttJUZVOd = BigInt("1409")
		const addressvpn1rpr = accounts[0]
		const address11GqVc = accounts[4]
		const uint3oLgGd = BigInt("1693")
		const uintaBdtEW = BigInt("389")
		const addressI6TlZ3a = accounts[5]
		const boolXYOs9S = await LUPTSVpo8j.transfer.call(addressvpn1rpr, uinttJUZVOd, {from: accounts[2]});
		const uint8QuUbhYh = await LUPTSVpo8j.decimals.call({from: accounts[4]});
//		const addresszzxBptx = await LUPTSVpo8j.notFrozen.call(address11GqVc, {from: accounts[3]});
//		const boolhaxJTro = await LUPTSVpo8j.lock.call(addressI6TlZ3a, uintaBdtEW, uint3oLgGd, {from: accounts[2]});

		assert.equal(boolXYOs9S, true)
		assert.equal(uint8QuUbhYh, BigInt("18"))
		await expect(LUPTSVpo8j.notFrozen.call(address11GqVc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPUS18GNF = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintB06HDPM = BigInt("1055")
		const uintAtoWZf = BigInt("676")
		const addressQmuMc3 = "0x0000000000000000000000000000000000000001"
		const addressXZRABI = accounts[1]
		const uintCPJ7tx2 = BigInt("1235")
		const addressgkepazO = accounts[5]
		const stringTpGpqHA = await LUPUS18GNF.name.call({from: accounts[0]});
		const boolKw4ayk6 = await LUPUS18GNF.lock.call(addressQmuMc3, uintAtoWZf, uintB06HDPM, {from: accounts[1]});
		const addressP28UrM = await LUPUS18GNF.notFrozen.call(addressXZRABI, {from: accounts[3]});
		const booli9kpWe = await LUPUS18GNF.unlock.call(addressgkepazO, uintCPJ7tx2, {from: accounts[1]});
		const stringE2QH45t = await LUPUS18GNF.symbol.call({from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const addressWtFTFPO = accounts[3]
		const addresseBT3k8V = accounts[0]
		const addressGYglRqw = accounts[1]
		const uint256e64FWY6 = await LUPTSVpo8j.balanceOf.call(addressWtFTFPO, {from: "0x0000000000000000000000000000000000000001"});
		const addressNq0OXfh = await LUPTSVpo8j.upgradeTo.call(addresseBT3k8V, {from: accounts[2]});
//		const addressKsFrM8O = await LUPTSVpo8j.upgradeTo.call(addressGYglRqw, {from: accounts[3]});
//		const stringo9zM8wt = await LUPTSVpo8j.symbol.call({from: accounts[4]});

		assert.equal(uint256e64FWY6, BigInt("0"))
		await expect(LUPTSVpo8j.upgradeTo.call(addressGYglRqw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const uintRwcNTOy = BigInt("1301")
		const uintBHD98tF = BigInt("384")
		const addressgAtCxQz = accounts[0]
		const addressEQLvMLG = accounts[3]
		const bool4ymGEN = await LUPTSVpo8j.transferWithLock.call(addressgAtCxQz, uintBHD98tF, uintRwcNTOy, {from: accounts[2]});
		const uint8HhbdsBV = await LUPTSVpo8j.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256e64FWY6 = await LUPTSVpo8j.balanceOf.call(addressEQLvMLG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool4ymGEN, true)
		assert.equal(uint256e64FWY6, BigInt("0"))
		assert.equal(uint8HhbdsBV, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const uintVYozH26 = BigInt("1291")
		const addressN38g9rv = accounts[4]
		const uintpCnG7lr = BigInt("1693")
		const uintiHZ9UjR = BigInt("375")
		const addressj2IIVnE = accounts[5]
//		const boolIv4Pazr = await LUPTSVpo8j.unlock.call(addressN38g9rv, uintVYozH26, {from: accounts[2]});
//		const boolhaxJTro = await LUPTSVpo8j.lock.call(addressj2IIVnE, uintiHZ9UjR, uintpCnG7lr, {from: accounts[2]});

		await expect(LUPTSVpo8j.unlock.call(addressN38g9rv, uintVYozH26, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPTSVpo8j = await LUP.new({from: accounts[2]});
		const boolO1fzD0J = true
		const addresszxtbknz = accounts[3]
		const uintCfm8Hl = BigInt("1783")
		const address6D0GWw = accounts[0]
		const uintuSSumpY = BigInt("1693")
		const uintHgtt00J = BigInt("389")
		const addressXgbXby = accounts[6]
		const boolM4n8hNi = await LUPTSVpo8j.freezeAccount.call(addresszxtbknz, boolO1fzD0J, {from: accounts[2]});
//		const boolVvuJSPn = await LUPTSVpo8j.transfer.call(address6D0GWw, uintCfm8Hl, {from: accounts[1]});
//		const boolhaxJTro = await LUPTSVpo8j.lock.call(addressXgbXby, uintHgtt00J, uintuSSumpY, {from: accounts[2]});

		assert.equal(boolM4n8hNi, true)
		await expect(LUPTSVpo8j.transfer.call(address6D0GWw, uintCfm8Hl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})