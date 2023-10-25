const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringEsfPxok = "V5aSLVgm1woj1WHRpfiosmyxyBOrIus"
		const stringmdM69q7 = "tGsI627CKpO0LIbMIW"
		const uintjiIVhGP = BigInt("72")
		const LUPCWD5KFz = await LUP.new(stringEsfPxok, stringmdM69q7, uintjiIVhGP, {from: accounts[0]});
		const uintw8SECzG = BigInt("1235")
		const addressj2nPAu = accounts[3]
		const addressrAQpLl = "0x0000000000000000000000000000000000000001"
		const addressQ7ZnDfO = accounts[4]
		const addressV8v8eT = accounts[3]
		const addressJ8So8e = accounts[3]
		const boolN7vPYJ2 = await LUPCWD5KFz.transfer.call(addressj2nPAu, uintw8SECzG, {from: accounts[4]});
		const addressFBGc06T = await LUPCWD5KFz.notFrozen.call(addressrAQpLl, {from: accounts[4]});
		const uint256XpkPUyP = await LUPCWD5KFz.balanceOf.call(addressQ7ZnDfO, {from: accounts[3]});
		const uint256g8Fz2IW = await LUPCWD5KFz.balanceOf.call(addressV8v8eT, {from: accounts[2]});
		const addressVzJiJM = await LUPCWD5KFz.notFrozen.call(addressJ8So8e, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPikCYjoY = await LUP.new({from: accounts[2]});
		const addressbXfGpTD = accounts[2]
		const uintPC9S7g = BigInt("2006")
		const uintG3sxQve = BigInt("349")
		const addressrMbwCno = "0x0000000000000000000000000000000000000001"
		const uintxKt7nEQ = BigInt("17")
		const uintPhwf6Rb = BigInt("1042")
		const addressOW7786H = accounts[1]
		const uintS5h6W4M = BigInt("1603")
		const uintlGf5Opp = BigInt("862")
		const addressCNbExoS = accounts[3]
		const boolCNfWT6o = false
		const addressckVMdrB = accounts[4]
		const uint256WiTm7Nc = await LUPikCYjoY.balanceOf.call(addressbXfGpTD, {from: accounts[5]});
		const boolsJ7Ue7I = await LUPikCYjoY.lock.call(addressrMbwCno, uintG3sxQve, uintPC9S7g, {from: accounts[3]});
		const boolldrqMPM = await LUPikCYjoY.transferWithLock.call(addressOW7786H, uintPhwf6Rb, uintxKt7nEQ, {from: accounts[1]});
		const boolkBfPf4Y = await LUPikCYjoY.lock.call(addressCNbExoS, uintlGf5Opp, uintS5h6W4M, {from: accounts[3]});
		const boolgbiFtM7 = await LUPikCYjoY.freezeAccount.call(addressckVMdrB, boolCNfWT6o, {from: accounts[0]});

		assert.equal(uint256WiTm7Nc, BigInt("50000000000000000000000000"))
		await expect(LUPikCYjoY.lock.call(addressrMbwCno, uintG3sxQve, uintPC9S7g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPKIXr4SK = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdznvrdU = BigInt("753")
		const uintWgPFDuy = BigInt("1935")
		const addressy8eKexu = accounts[2]
		const uintflfyhW2 = BigInt("653")
		const addressi8AB70h = accounts[4]
		const boolAb7jA66 = await LUPKIXr4SK.lock.call(addressy8eKexu, uintWgPFDuy, uintdznvrdU, {from: accounts[5]});
		const stringYNHWdRr = await LUPKIXr4SK.symbol.call({from: accounts[5]});
		const stringf4KdU33 = await LUPKIXr4SK.symbol.call({from: accounts[3]});
		const stringswXk4fQ = await LUPKIXr4SK.name.call({from: accounts[4]});
		const boolqIRU5lk = await LUPKIXr4SK.unlock.call(addressi8AB70h, uintflfyhW2, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPNia4qsk = await LUP.new({from: accounts[3]});
		const addressyqj82xN = accounts[3]
		const uintlhKWD8m = BigInt("460")
		const uintO1xBY1x = BigInt("1391")
		const addressdrZNYwL = accounts[5]
		const uintQkymq0r = BigInt("1671")
		const uintLNPpyea = BigInt("794")
		const addressJ4AnhPt = accounts[2]
		const stringGob1ez = await LUPNia4qsk.name.call({from: accounts[5]});
		const addressOksPQsp = await LUPNia4qsk.upgradeTo.call(addressyqj82xN, {from: accounts[3]});
		const boolB7Dpv6 = await LUPNia4qsk.transferWithLock.call(addressdrZNYwL, uintO1xBY1x, uintlhKWD8m, {from: accounts[4]});
		const boolGZHfbXI = await LUPNia4qsk.transferWithLock.call(addressJ4AnhPt, uintLNPpyea, uintQkymq0r, {from: accounts[1]});

		assert.equal(stringGob1ez, "LINKUP Token")
		await expect(LUPNia4qsk.transferWithLock.call(addressdrZNYwL, uintO1xBY1x, uintlhKWD8m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPLSOflAW = await LUP.new({from: accounts[2]});
		const uintcpljeiI = BigInt("1883")
		const address6BM7Nw = accounts[1]
		const addressJIv7mG1 = accounts[1]
		const uintn4thwt = BigInt("1747")
		const uintqtsMzJ0 = BigInt("678")
		const addressfExaSn = "0x0000000000000000000000000000000000000001"
		const boolHLDfbh = await LUPLSOflAW.transfer.call(address6BM7Nw, uintcpljeiI, {from: accounts[3]});
		const uint8YLBkqtG = await LUPLSOflAW.decimals.call({from: accounts[4]});
		const addressWDLrXO = await LUPLSOflAW.upgradeTo.call(addressJIv7mG1, {from: accounts[4]});
		const boolc8uZFEt = await LUPLSOflAW.lock.call(addressfExaSn, uintqtsMzJ0, uintn4thwt, {from: accounts[0]});
		const uint8z8S6ae = await LUPLSOflAW.decimals.call({from: accounts[4]});

		await expect(LUPLSOflAW.transfer.call(address6BM7Nw, uintcpljeiI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVnRmU1m = await LUP.new({from: accounts[4]});
		const uintYCGNNAB = BigInt("438")
		const addressze6LlwB = accounts[0]
		const addressHRCTlQ = accounts[3]
		const string7P5Xr4 = await LUPVnRmU1m.symbol.call({from: accounts[1]});
		const boolSeB4qyl = await LUPVnRmU1m.unlock.call(addressze6LlwB, uintYCGNNAB, {from: accounts[3]});
		const addressxU5BgK6 = await LUPVnRmU1m.notFrozen.call(addressHRCTlQ, {from: accounts[1]});

		assert.equal(string7P5Xr4, "LUP")
		await expect(LUPVnRmU1m.unlock.call(addressze6LlwB, uintYCGNNAB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPikCYjoY = await LUP.new({from: accounts[2]});
		const addressdOixSdI = accounts[2]
		const addressyr1fnBC = accounts[0]
		const uintwdbBRZp = BigInt("2006")
		const uintEXbg5ZK = BigInt("349")
		const addressg8CRBjZ = "0x0000000000000000000000000000000000000001"
		const uintnVujHvY = BigInt("17")
		const uintL0GVavb = BigInt("1042")
		const addressbMbKRQX = accounts[1]
		const uintg5XdO1 = BigInt("1603")
		const uintFMSilWq = BigInt("862")
		const addresso6qz1lO = accounts[3]
		const boolCNfWT6o = false
		const address1AQ4WG = accounts[4]
		const uint256WiTm7Nc = await LUPikCYjoY.balanceOf.call(addressdOixSdI, {from: accounts[5]});
		const addressQyO6wZ = await LUPikCYjoY.upgradeTo.call(addressyr1fnBC, {from: accounts[3]});
		const stringXEnrq94 = await LUPikCYjoY.name.call({from: accounts[0]});
		const boolsJ7Ue7I = await LUPikCYjoY.lock.call(addressg8CRBjZ, uintEXbg5ZK, uintwdbBRZp, {from: accounts[3]});
		const boolldrqMPM = await LUPikCYjoY.transferWithLock.call(addressbMbKRQX, uintL0GVavb, uintnVujHvY, {from: accounts[1]});
		const boolkBfPf4Y = await LUPikCYjoY.lock.call(addresso6qz1lO, uintFMSilWq, uintg5XdO1, {from: accounts[3]});
		const boolgbiFtM7 = await LUPikCYjoY.freezeAccount.call(address1AQ4WG, boolCNfWT6o, {from: accounts[0]});

		assert.equal(uint256WiTm7Nc, BigInt("50000000000000000000000000"))
		await expect(LUPikCYjoY.upgradeTo.call(addressyr1fnBC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPuBYXnml = await LUP.new({from: accounts[2]});
		const addressDgHwKR = accounts[5]
		const addressjiQeijS = await LUPuBYXnml.notFrozen.call(addressDgHwKR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPuBYXnml.notFrozen.call(addressDgHwKR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPuBYXnml = await LUP.new({from: accounts[2]});
		const uintcHpLjF0 = BigInt("303")
		const uintSBf3YuG = BigInt("235")
		const addresstJptXRF = accounts[3]
		const addressaA2KBjs = accounts[6]
		const boolAiZjCE9 = await LUPuBYXnml.lock.call(addresstJptXRF, uintSBf3YuG, uintcHpLjF0, {from: accounts[2]});
		const addressjiQeijS = await LUPuBYXnml.notFrozen.call(addressaA2KBjs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPuBYXnml.lock.call(addresstJptXRF, uintSBf3YuG, uintcHpLjF0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPikCYjoY = await LUP.new({from: accounts[2]});
		const boolYB0AIbK = true
		const addressqz8owj = accounts[4]
		const addressCOGBD91 = accounts[2]
		const uintJS69cl = BigInt("974")
		const uintmjaH0lQ = BigInt("1036")
		const addressCP59RQV = accounts[1]
		const boolCNfWT6o = false
		const addressfXEEMJW = accounts[4]
		const boolmZUfcui = await LUPikCYjoY.freezeAccount.call(addressqz8owj, boolYB0AIbK, {from: accounts[2]});
		const uint256WiTm7Nc = await LUPikCYjoY.balanceOf.call(addressCOGBD91, {from: accounts[5]});
		const boolldrqMPM = await LUPikCYjoY.transferWithLock.call(addressCP59RQV, uintmjaH0lQ, uintJS69cl, {from: accounts[1]});
		const boolgbiFtM7 = await LUPikCYjoY.freezeAccount.call(addressfXEEMJW, boolCNfWT6o, {from: accounts[0]});

		assert.equal(boolmZUfcui, true)
		assert.equal(uint256WiTm7Nc, BigInt("50000000000000000000000000"))
		await expect(LUPikCYjoY.transferWithLock.call(addressCP59RQV, uintmjaH0lQ, uintJS69cl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPikCYjoY = await LUP.new({from: accounts[2]});
		const addressaEHuZsT = accounts[2]
		const uintux0QdvY = BigInt("17")
		const uintr1kcViA = BigInt("1045")
		const addressct76vBt = accounts[1]
		const uinteHjbrG8 = BigInt("1475")
		const uintxP2f7ub = BigInt("1802")
		const addressKCDTS0a = accounts[1]
		const boolCNfWT6o = false
		const addressn4JA9iD = accounts[4]
		const uint89N8wPv = await LUPikCYjoY.decimals.call({from: accounts[4]});
		const uint256WiTm7Nc = await LUPikCYjoY.balanceOf.call(addressaEHuZsT, {from: accounts[5]});
		const boolldrqMPM = await LUPikCYjoY.transferWithLock.call(addressct76vBt, uintr1kcViA, uintux0QdvY, {from: accounts[1]});
		const boolf9vES7F = await LUPikCYjoY.transferWithLock.call(addressKCDTS0a, uintxP2f7ub, uinteHjbrG8, {from: accounts[5]});
		const boolgbiFtM7 = await LUPikCYjoY.freezeAccount.call(addressn4JA9iD, boolCNfWT6o, {from: accounts[0]});

		assert.equal(uint256WiTm7Nc, BigInt("50000000000000000000000000"))
		assert.equal(uint89N8wPv, BigInt("18"))
		await expect(LUPikCYjoY.transferWithLock.call(addressct76vBt, uintr1kcViA, uintux0QdvY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPikCYjoY = await LUP.new({from: accounts[2]});
		const uintUiaD3Lg = BigInt("868")
		const addressOGwdwY = accounts[1]
		const addressjl9IZy2 = accounts[4]
		const boolk1cKpL0 = await LUPikCYjoY.unlock.call(addressOGwdwY, uintUiaD3Lg, {from: accounts[2]});
		const uint256WiTm7Nc = await LUPikCYjoY.balanceOf.call(addressjl9IZy2, {from: accounts[5]});

		await expect(LUPikCYjoY.unlock.call(addressOGwdwY, uintUiaD3Lg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPuBYXnml = await LUP.new({from: accounts[2]});
		const uintRAQdqZL = BigInt("32")
		const uintGKkCcX = BigInt("1905")
		const addresspRjAT3 = accounts[2]
		const addressmIPEwVl = accounts[6]
		const boolHQ7ycZ = false
		const addressQQvNAX = accounts[5]
		const boolRBuy58s = await LUPuBYXnml.lock.call(addresspRjAT3, uintGKkCcX, uintRAQdqZL, {from: accounts[2]});
		const addressjiQeijS = await LUPuBYXnml.notFrozen.call(addressmIPEwVl, {from: "0x0000000000000000000000000000000000000001"});
		const boolMFhK1zK = await LUPuBYXnml.freezeAccount.call(addressQQvNAX, boolHQ7ycZ, {from: accounts[5]});

		assert.equal(boolRBuy58s, true)
		await expect(LUPuBYXnml.notFrozen.call(addressmIPEwVl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPikCYjoY = await LUP.new({from: accounts[2]});
		const addressd0bSmQP = accounts[5]
		const uintVmVdV2j = BigInt("78")
		const uintu9yp10j = BigInt("579")
		const addressgsiwBm = accounts[5]
		const uint256WiTm7Nc = await LUPikCYjoY.balanceOf.call(addressd0bSmQP, {from: accounts[5]});
		const boolAfcsiqY = await LUPikCYjoY.transferWithLock.call(addressgsiwBm, uintu9yp10j, uintVmVdV2j, {from: accounts[2]});

		assert.equal(boolAfcsiqY, true)
		assert.equal(uint256WiTm7Nc, BigInt("0"))
	});
})