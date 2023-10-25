const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinL8NtZzw = await DJCoin.new({from: accounts[2]});
		const uintiaPvQPO = BigInt("966")
		const uintmhMhSOH = BigInt("1598")
		const uint7Yg0p3 = BigInt("1444")
		const addressktZy1Vp = "0x0000000000000000000000000000000000000001"
		const uintauGdlkJ = BigInt("1871")
		const addressYlqZvs1 = accounts[2]
		const addressAg0lJJt = accounts[2]
		const uint256HkKPAVq = await DJCoinL8NtZzw.burn.call(uintmhMhSOH, uintiaPvQPO, {from: accounts[4]});
		const boolVTw8pD2 = await DJCoinL8NtZzw.decreaseAllowance.call(addressktZy1Vp, uint7Yg0p3, {from: accounts[2]});
		const boolfiqnwwP = await DJCoinL8NtZzw.transferFrom.call(addressAg0lJJt, addressYlqZvs1, uintauGdlkJ, {from: accounts[0]});

		await expect(DJCoinL8NtZzw.burn.call(uintmhMhSOH, uintiaPvQPO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoingR1fXxA = await DJCoin.new({from: accounts[1]});
		const uintsWxWTGd = BigInt("517")
		const addresse3Wco1g = accounts[4]
		const addressrOKTq8T = accounts[5]
		const addresstodMeoY = accounts[1]
		const boolJScbA5c = await DJCoingR1fXxA.increaseAllowance.call(addresse3Wco1g, uintsWxWTGd, {from: accounts[5]});
		const uint256ttEG0FF = await DJCoingR1fXxA.allowance.call(addresstodMeoY, addressrOKTq8T, {from: accounts[4]});

		assert.equal(boolJScbA5c, true)
		assert.equal(uint256ttEG0FF, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinr5TSJl3 = await DJCoin.new({from: accounts[3]});
		const addressfKnLFU = "0x0000000000000000000000000000000000000001"
		const addressusXqUcE = accounts[2]
		const uintA75E73J = BigInt("22")
		const addressIILu0nw = accounts[2]
		const uintRQyeyIg = BigInt("517")
		const addressLFN7rvl = accounts[2]
		const addressiLdZ28i = accounts[3]
		const uintB9iB8Q = BigInt("766")
		const addressmqYCpOC = accounts[2]
		const uint256EqHh80J = await DJCoinr5TSJl3.allowance.call(addressusXqUcE, addressfKnLFU, {from: accounts[2]});
		const boolrAlvYoo = await DJCoinr5TSJl3.decreaseAllowance.call(addressIILu0nw, uintA75E73J, {from: accounts[3]});
		const addresslPbg3uL = await DJCoinr5TSJl3.owner.call({from: accounts[0]});
		const boolJkSdsCT = await DJCoinr5TSJl3.transferFrom.call(addressiLdZ28i, addressLFN7rvl, uintRQyeyIg, {from: accounts[3]});
		const boolFg6zzn1 = await DJCoinr5TSJl3.approve.call(addressmqYCpOC, uintB9iB8Q, {from: accounts[1]});

		assert.equal(addresslPbg3uL, 0x2488fE0fB78d9067c451D0862b714F0ab091E500)
		assert.equal(boolrAlvYoo, true)
		assert.equal(uint256EqHh80J, BigInt("0"))
		await expect(DJCoinr5TSJl3.transferFrom.call(addressiLdZ28i, addressLFN7rvl, uintRQyeyIg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFKPGFd5 = await DJCoin.new({from: accounts[1]});
		const uintdMiA3KK = BigInt("1729")
		const addressDFLm252 = accounts[3]
		const uintjPxgItz = BigInt("874")
		const uintolqtPKo = BigInt("1485")
		const uintzcHCR66 = BigInt("673")
		const addressoItyQBY = accounts[1]
		const boolBpZ3Q7k = await DJCoinFKPGFd5.decreaseAllowance.call(addressDFLm252, uintdMiA3KK, {from: accounts[3]});
		const uint256VYt98v = await DJCoinFKPGFd5.burn.call(uintolqtPKo, uintjPxgItz, {from: accounts[1]});
		const boolApKKbjF = await DJCoinFKPGFd5.transfer.call(addressoItyQBY, uintzcHCR66, {from: accounts[0]});

		assert.equal(boolBpZ3Q7k, true)
		assert.equal(uint256VYt98v, BigInt("1916460000000"))
		await expect(DJCoinFKPGFd5.transfer.call(addressoItyQBY, uintzcHCR66, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinHxIvxOI = await DJCoin.new({from: accounts[1]});
		const uintROEcoL = BigInt("1521")
		const addresseBmeAx9 = accounts[5]
		const addressM1luTkz = accounts[1]
		const addresssJlAIt = accounts[4]
		const uint256c1zS8We = await DJCoinHxIvxOI.totalSupply.call({from: accounts[1]});
		const boolmRnoV8N = await DJCoinHxIvxOI.decreaseAllowance.call(addresseBmeAx9, uintROEcoL, {from: accounts[0]});
		await DJCoinHxIvxOI.renounceOwnership.call({from: accounts[0]});
		const uint256YW2NrHM = await DJCoinHxIvxOI.totalSupply.call({from: accounts[4]});
		const uint256sEyDfP = await DJCoinHxIvxOI.allowance.call(addresssJlAIt, addressM1luTkz, {from: accounts[2]});

		assert.equal(boolmRnoV8N, true)
		assert.equal(uint256c1zS8We, BigInt("2100000000000"))
		await expect(DJCoinHxIvxOI.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSMxycjY = await DJCoin.new({from: accounts[2]});
		const addressKMUEXq = accounts[2]
		const addressgQOjmlu = accounts[3]
		const uinthfJxbHq = BigInt("1574")
		const addressE4mmYYO = accounts[5]
		const uintWIqzR5t = BigInt("108")
		const uintd05VuqL = BigInt("210")
		const addressXFoI9ue = accounts[4]
		const addressu24AqD = accounts[2]
		const uint256FrlEA6h = await DJCoinSMxycjY.totalSupply.call({from: accounts[0]});
		const uint256wPDoAOj = await DJCoinSMxycjY.allowance.call(addressgQOjmlu, addressKMUEXq, {from: accounts[2]});
		await DJCoinSMxycjY.onlyOwner.call({from: accounts[2]});
		const boolTng3K66 = await DJCoinSMxycjY.transfer.call(addressE4mmYYO, uinthfJxbHq, {from: accounts[3]});
		const uint256a1NvL68 = await DJCoinSMxycjY.burn.call(uintd05VuqL, uintWIqzR5t, {from: accounts[4]});
		const uint256jySiSxy = await DJCoinSMxycjY.allowance.call(addressu24AqD, addressXFoI9ue, {from: accounts[3]});

		assert.equal(uint256FrlEA6h, BigInt("2100000000000"))
		assert.equal(uint256wPDoAOj, BigInt("0"))
		await expect(DJCoinSMxycjY.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFKPGFd5 = await DJCoin.new({from: accounts[1]});
		const uintGi2Pton = BigInt("1729")
		const addressKbiWSEe = accounts[3]
		const uintLEqUi5D = BigInt("874")
		const uintpCjjs5C = BigInt("1485")
		const uintoHnO0o9 = BigInt("1949")
		const addressPkOM4s7 = accounts[2]
		const addressH0MN56V = accounts[4]
		const uintx1z4qJF = BigInt("686")
		const addresswHxVMzF = accounts[1]
		const boolBpZ3Q7k = await DJCoinFKPGFd5.decreaseAllowance.call(addressKbiWSEe, uintGi2Pton, {from: accounts[3]});
		const uint256VYt98v = await DJCoinFKPGFd5.burn.call(uintpCjjs5C, uintLEqUi5D, {from: accounts[1]});
		const boolWkOMHiF = await DJCoinFKPGFd5.approve.call(addressPkOM4s7, uintoHnO0o9, {from: accounts[1]});
		const addressX2wj6ay = await DJCoinFKPGFd5.validRecipient.call(addressH0MN56V, {from: "0x0000000000000000000000000000000000000001"});
		const boolApKKbjF = await DJCoinFKPGFd5.transfer.call(addresswHxVMzF, uintx1z4qJF, {from: accounts[0]});

		assert.equal(boolBpZ3Q7k, true)
		assert.equal(boolWkOMHiF, true)
		assert.equal(uint256VYt98v, BigInt("1916460000000"))
		await expect(DJCoinFKPGFd5.validRecipient.call(addressH0MN56V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFKPGFd5 = await DJCoin.new({from: accounts[1]});
		const uint5BFpuV = BigInt("1053")
		const uintKDkFRu4 = BigInt("1729")
		const addressyWKTt6J = accounts[4]
		const uintRLCVDZ3 = BigInt("874")
		const uintGr9W2vT = BigInt("1485")
		const uintwgygjC = BigInt("673")
		const addressX3FijCM = accounts[2]
		const boolnJiLtob = await DJCoinFKPGFd5.changetokensPerBlock.call(uint5BFpuV, {from: accounts[2]});
		const boolBpZ3Q7k = await DJCoinFKPGFd5.decreaseAllowance.call(addressyWKTt6J, uintKDkFRu4, {from: accounts[3]});
		const uint256VYt98v = await DJCoinFKPGFd5.burn.call(uintGr9W2vT, uintRLCVDZ3, {from: accounts[1]});
		await DJCoinFKPGFd5.onlyOwner.call({from: accounts[4]});
		const boolApKKbjF = await DJCoinFKPGFd5.transfer.call(addressX3FijCM, uintwgygjC, {from: accounts[0]});

		assert.equal(boolBpZ3Q7k, true)
		assert.equal(boolnJiLtob, true)
		assert.equal(uint256VYt98v, BigInt("1916460000000"))
		await expect(DJCoinFKPGFd5.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFKPGFd5 = await DJCoin.new({from: accounts[1]});
		const addresst5vMi2k = accounts[0]
		const uintf7Mbpvy = BigInt("1729")
		const addressYITpQLR = accounts[4]
		const uintZNgQsHW = BigInt("115")
		const uintocvaykq = BigInt("1302")
		const uint256qbmLT0V = await DJCoinFKPGFd5.balanceOf.call(addresst5vMi2k, {from: accounts[4]});
		const boolBpZ3Q7k = await DJCoinFKPGFd5.decreaseAllowance.call(addressYITpQLR, uintf7Mbpvy, {from: accounts[3]});
		const uint256TtOqXJg = await DJCoinFKPGFd5.burn.call(uintocvaykq, uintZNgQsHW, {from: accounts[3]});

		assert.equal(boolBpZ3Q7k, true)
		assert.equal(uint256qbmLT0V, BigInt("0"))
		await expect(DJCoinFKPGFd5.burn.call(uintocvaykq, uintZNgQsHW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFKPGFd5 = await DJCoin.new({from: accounts[1]});
		const addressFBAatWA = accounts[2]
		const uintwHxEuJV = BigInt("650")
		const addressnXznq4N = accounts[1]
		const addressbkMohE5 = accounts[4]
		const addressiu61ZRK = await DJCoinFKPGFd5.transferOwnership.call(addressFBAatWA, {from: accounts[1]});
		const boolApKKbjF = await DJCoinFKPGFd5.transfer.call(addressnXznq4N, uintwHxEuJV, {from: accounts[0]});
		const addresswN78HTi = await DJCoinFKPGFd5.transferOwnership.call(addressbkMohE5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoinFKPGFd5.transfer.call(addressnXznq4N, uintwHxEuJV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinlP3NhGn = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsQ2jtKR = BigInt("396")
		const addressQigtlve = accounts[5]
		const uintXlmUdLM = BigInt("482")
		const uintmsxImeo = BigInt("254")
		const uintxTa36Uh = BigInt("1493")
		const addressn0C8j4 = accounts[5]
		const addressTjv9tbm = accounts[1]
		const boolE4iCD2q = await DJCoinlP3NhGn.increaseAllowance.call(addressQigtlve, uintsQ2jtKR, {from: accounts[2]});
		const uint256O5K9QoW = await DJCoinlP3NhGn.burn.call(uintmsxImeo, uintXlmUdLM, {from: accounts[1]});
		await DJCoinlP3NhGn.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyz5V2XT = await DJCoinlP3NhGn.increaseAllowance.call(addressn0C8j4, uintxTa36Uh, {from: accounts[4]});
		const uint256b2A1nh9 = await DJCoinlP3NhGn.balanceOf.call(addressTjv9tbm, {from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoinFKPGFd5 = await DJCoin.new({from: accounts[1]});
		const uintnXbPyP = BigInt("391")
		const addressf221SIz = accounts[3]
		const uintUZJmDNw = BigInt("2006")
		const addressdwcyFX2 = accounts[3]
		const addressrlr7B7 = accounts[5]
		const addressRbbXdZa = accounts[3]
		const uintOEuNsMz = BigInt("633")
		const addressSyok7W6 = accounts[1]
		const addressm1WFoyo = accounts[4]
		const addressVYiBTc5 = accounts[4]
		const uintxZhSS1I = BigInt("307")
		const uintIRHwy6N = BigInt("668")
		const addressonpgrOr = accounts[0]
		const uint256hyiK1jB = await DJCoinFKPGFd5.totalSupply.call({from: accounts[4]});
		await DJCoinFKPGFd5.renounceOwnership.call({from: accounts[1]});
		const boolSw4x1df = await DJCoinFKPGFd5.transfer.call(addressf221SIz, uintnXbPyP, {from: accounts[2]});
		const boolqHhM2bd = await DJCoinFKPGFd5.approve.call(addressdwcyFX2, uintUZJmDNw, {from: accounts[4]});
		const addressjVB25Ua = await DJCoinFKPGFd5.transferOwnership.call(addressrlr7B7, {from: "0x0000000000000000000000000000000000000001"});
		const addressiu61ZRK = await DJCoinFKPGFd5.transferOwnership.call(addressRbbXdZa, {from: accounts[1]});
		const boolApKKbjF = await DJCoinFKPGFd5.transfer.call(addressSyok7W6, uintOEuNsMz, {from: accounts[0]});
		const addresswN78HTi = await DJCoinFKPGFd5.transferOwnership.call(addressm1WFoyo, {from: "0x0000000000000000000000000000000000000001"});
		await DJCoinFKPGFd5.onlyOwner.call({from: accounts[2]});
		const uint256X2Z6ImW = await DJCoinFKPGFd5.balanceOf.call(addressVYiBTc5, {from: accounts[3]});
		await DJCoinFKPGFd5.onlyOwner.call({from: accounts[2]});
		const uint256f8XNL8 = await DJCoinFKPGFd5.burn.call(uintIRHwy6N, uintxZhSS1I, {from: accounts[2]});
		const uint256y5laIpN = await DJCoinFKPGFd5.balanceOf.call(addressonpgrOr, {from: accounts[2]});

		assert.equal(uint256hyiK1jB, BigInt("2100000000000"))
		await expect(DJCoinFKPGFd5.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYOLbbBk = await DJCoin.new({from: accounts[1]});
		const uintRJlMwdg = BigInt("0")
		const addressXEX0Zvf = accounts[2]
		const uintU6BUBRJ = BigInt("1277")
		const addresslTiuiA = accounts[4]
		const addressRQbaXHW = "0x0000000000000000000000000000000000000000"
		const boolPlLZ1x = await DJCoinYOLbbBk.transfer.call(addressXEX0Zvf, uintRJlMwdg, {from: accounts[2]});
		const boolEo2RfA5 = await DJCoinYOLbbBk.increaseAllowance.call(addresslTiuiA, uintU6BUBRJ, {from: accounts[1]});
		const addressR4GuxgK = await DJCoinYOLbbBk.validRecipient.call(addressRQbaXHW, {from: accounts[1]});

		assert.equal(boolEo2RfA5, true)
		assert.equal(boolPlLZ1x, true)
		await expect(DJCoinYOLbbBk.validRecipient.call(addressRQbaXHW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})