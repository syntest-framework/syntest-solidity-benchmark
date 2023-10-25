const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITHHtvEyj = await RIT.new({from: accounts[3]});
		const uintKQ8s7dB = BigInt("1081")
		const uintzGKpJAz = BigInt("71")
		const uintEQGSV62 = BigInt("436")
		const addressEWMiD9A = accounts[5]
		const uintHoUceV = BigInt("1975")
		const address6XS8Bp = accounts[4]
		const uintsT741mM = BigInt("532")
		const addressZmzcqjX = accounts[5]
		const addressvkDnDm3 = accounts[4]
//		const uint256dIH4ztr = await RITHHtvEyj._burn.call(uintKQ8s7dB, {from: accounts[1]});
//		const uint256Yk332VA = await RITHHtvEyj._burn.call(uintzGKpJAz, {from: accounts[4]});
//		const boolTj8SUT2 = await RITHHtvEyj.increaseAllowance.call(addressEWMiD9A, uintEQGSV62, {from: accounts[0]});
//		const uint8F0ZC48h = await RITHHtvEyj.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolJnG7NEP = await RITHHtvEyj.transfer.call(address6XS8Bp, uintHoUceV, {from: accounts[0]});
//		const boolbnidCbj = await RITHHtvEyj.transferFrom.call(addressvkDnDm3, addressZmzcqjX, uintsT741mM, {from: accounts[3]});

		await expect(RITHHtvEyj._burn.call(uintKQ8s7dB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITAUKQt6H = await RIT.new({from: accounts[0]});
		const addresszXTrJFt = accounts[1]
		const addressfkAnwYI = accounts[5]
		const addressd5hNK5O = accounts[0]
		const uint256aZyP4uY = await RITAUKQt6H.balanceOf.call(addresszXTrJFt, {from: accounts[0]});
		const uint256Trj8rYl = await RITAUKQt6H.allowance.call(addressd5hNK5O, addressfkAnwYI, {from: accounts[5]});

		assert.equal(uint256Trj8rYl, BigInt("0"))
		assert.equal(uint256aZyP4uY, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITaxq4qIb = await RIT.new({from: accounts[2]});
		const uintUlqhAU = BigInt("136")
		const addressQYw0k8Z = accounts[0]
		const uintR9CYGAv = BigInt("171")
		const addressHuXmXnF = "0x0000000000000000000000000000000000000001"
		const addresseRiSnzy = accounts[4]
		const uintHTimQd1 = BigInt("475")
		const addressZgS2vHL = accounts[3]
		const boolT1vhoD = await RITaxq4qIb.increaseAllowance.call(addressQYw0k8Z, uintUlqhAU, {from: accounts[3]});
//		const boolmoT3pg = await RITaxq4qIb.transferFrom.call(addresseRiSnzy, addressHuXmXnF, uintR9CYGAv, {from: accounts[2]});
//		const stringDE4Yg4v = await RITaxq4qIb.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolyv3Xird = await RITaxq4qIb.decreaseAllowance.call(addressZgS2vHL, uintHTimQd1, {from: accounts[1]});
//		const uint8xyEe9Ug = await RITaxq4qIb.decimals.call({from: accounts[1]});

		assert.equal(boolT1vhoD, true)
		await expect(RITaxq4qIb.transferFrom.call(addresseRiSnzy, addressHuXmXnF, uintR9CYGAv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITQHqqBzR = await RIT.new({from: accounts[3]});
		const uintFhT868y = BigInt("313")
		const addressDboRBpU = accounts[4]
		const uintCXkNth4 = BigInt("1254")
		const addressfFuUXdX = accounts[2]
		const stringkI3MER = await RITQHqqBzR.symbol.call({from: accounts[4]});
		const boolzn5sm08 = await RITQHqqBzR.increaseAllowance.call(addressDboRBpU, uintFhT868y, {from: accounts[2]});
		const stringNpusAkI = await RITQHqqBzR.symbol.call({from: accounts[2]});
		const stringevUZx4c = await RITQHqqBzR.symbol.call({from: accounts[0]});
//		const boolHxUlBMf = await RITQHqqBzR.decreaseAllowance.call(addressfFuUXdX, uintCXkNth4, {from: accounts[1]});

		assert.equal(boolzn5sm08, true)
		assert.equal(stringNpusAkI, "RIT 2.0")
		assert.equal(stringevUZx4c, "RIT 2.0")
		assert.equal(stringkI3MER, "RIT 2.0")
		await expect(RITQHqqBzR.decreaseAllowance.call(addressfFuUXdX, uintCXkNth4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITxz25c9u = await RIT.new({from: accounts[4]});
		const uintzeHMGg5 = BigInt("655")
		const addressAO7CYWn = accounts[2]
		const addressheXljT3 = accounts[0]
		const addresssyicDpg = accounts[2]
		const addressBIQiN9a = accounts[4]
		const addresskM4Ozb = accounts[3]
		const uint256QOO6F4Q = await RITxz25c9u.totalSupply.call({from: accounts[4]});
		const boolmMLmFqu = await RITxz25c9u.increaseAllowance.call(addressAO7CYWn, uintzeHMGg5, {from: accounts[0]});
		const uint256TOVjW1f = await RITxz25c9u.allowance.call(addresssyicDpg, addressheXljT3, {from: accounts[4]});
		const uint256QBtUz5i = await RITxz25c9u.allowance.call(addresskM4Ozb, addressBIQiN9a, {from: accounts[4]});

		assert.equal(boolmMLmFqu, true)
		assert.equal(uint256QBtUz5i, BigInt("0"))
		assert.equal(uint256QOO6F4Q, BigInt("500000000000000000000000000"))
		assert.equal(uint256TOVjW1f, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITEJcb9Jl = await RIT.new({from: accounts[4]});
		const addressMHpYfN7 = accounts[0]
		const addresssIRmhWV = accounts[0]
		const uintbScPICK = BigInt("16")
		const addressW277dp = accounts[0]
		const uint256B2DGgUM = await RITEJcb9Jl.allowance.call(addresssIRmhWV, addressMHpYfN7, {from: accounts[0]});
		const uint256E7l5lMl = await RITEJcb9Jl.totalSupply.call({from: accounts[3]});
		const stringfkxGUU3 = await RITEJcb9Jl.name.call({from: accounts[3]});
//		const boolq6ijKLN = await RITEJcb9Jl.transfer.call(addressW277dp, uintbScPICK, {from: accounts[4]});

		assert.equal(stringfkxGUU3, "Real Estate Investment Token")
		assert.equal(uint256B2DGgUM, BigInt("0"))
		assert.equal(uint256E7l5lMl, BigInt("500000000000000000000000000"))
		await expect(RITEJcb9Jl.transfer.call(addressW277dp, uintbScPICK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITxfOnoLq = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintidhzcHK = BigInt("1250")
		const addresszURZpTs = accounts[3]
		const uintQkhnosx = BigInt("359")
		const address3McSvR = accounts[4]
		const uintQTQrAS7 = BigInt("1875")
		const uintmb2xo5F = BigInt("1255")
		const boolGEtEgm5 = await RITxfOnoLq.transfer.call(addresszURZpTs, uintidhzcHK, {from: accounts[2]});
		const boolGlBnRID = await RITxfOnoLq.transfer.call(address3McSvR, uintQkhnosx, {from: accounts[3]});
		const stringHgzlcoE = await RITxfOnoLq.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BlE2BBU = await RITxfOnoLq._burn.call(uintQTQrAS7, {from: accounts[3]});
		const uint256UgqmGI6 = await RITxfOnoLq._burn.call(uintmb2xo5F, {from: accounts[5]});
	});

	it('test for RIT', async () => {
		const RIT0G9eYi = await RIT.new({from: accounts[0]});
		const uintqPUSdZR = BigInt("131")
		const addressRGgIdVH = accounts[5]
		const uintPHXhMWX = BigInt("1271")
		const addressjA22GX4 = accounts[4]
		const uintQCMomg = BigInt("682")
		const addressjIQ7xW9 = accounts[4]
		const addressjWK5b9C = accounts[2]
		const boolCHlXyB = await RIT0G9eYi.approve.call(addressRGgIdVH, uintqPUSdZR, {from: accounts[3]});
//		const boolnhHcHML = await RIT0G9eYi.decreaseAllowance.call(addressjA22GX4, uintPHXhMWX, {from: accounts[3]});
//		const uint8PvZQDkS = await RIT0G9eYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolYm8WXVk = await RIT0G9eYi.decreaseAllowance.call(addressjIQ7xW9, uintQCMomg, {from: accounts[1]});
//		const uint256TrCeS7R = await RIT0G9eYi.balanceOf.call(addressjWK5b9C, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCHlXyB, true)
		await expect(RIT0G9eYi.decreaseAllowance.call(addressjA22GX4, uintPHXhMWX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITJ27BPOe = await RIT.new({from: accounts[1]});
		const addressTOe6AS6 = "0x0000000000000000000000000000000000000001"
		const addressZpq9DQh = accounts[4]
		const addressq0O1Y9C = accounts[0]
		const uintXeSZp4r = BigInt("512")
		const addressuPVqwk7 = accounts[3]
		const uintTNgoKLy = BigInt("1871")
		const addressfuOVjSC = accounts[1]
		const uint256cFBnee = await RITJ27BPOe.balanceOf.call(addressTOe6AS6, {from: accounts[1]});
		const uint256R7DRRbu = await RITJ27BPOe.allowance.call(addressq0O1Y9C, addressZpq9DQh, {from: accounts[1]});
		const boolyAPZ2EP = await RITJ27BPOe.approve.call(addressuPVqwk7, uintXeSZp4r, {from: accounts[2]});
		const boolR6jg1QW = await RITJ27BPOe.increaseAllowance.call(addressfuOVjSC, uintTNgoKLy, {from: accounts[0]});
		const stringpQj2vd = await RITJ27BPOe.symbol.call({from: accounts[0]});
		const uint8Brt0iGF = await RITJ27BPOe.decimals.call({from: accounts[2]});

		assert.equal(boolR6jg1QW, true)
		assert.equal(boolyAPZ2EP, true)
		assert.equal(stringpQj2vd, "RIT 2.0")
		assert.equal(uint256R7DRRbu, BigInt("0"))
		assert.equal(uint256cFBnee, BigInt("0"))
		assert.equal(uint8Brt0iGF, BigInt("18"))
	});
})