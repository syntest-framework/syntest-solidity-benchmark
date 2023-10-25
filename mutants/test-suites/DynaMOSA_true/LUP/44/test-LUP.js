const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPvepfDwx = await LUP.new({from: accounts[1]});
		const uint70KNDg = BigInt("1608")
		const addressoeyLfEJ = "0x0000000000000000000000000000000000000001"
		const boolPlDA1nl = false
		const addressVjj1Pme = accounts[1]
		const boolZshMTOS = false
		const addressPniapiJ = accounts[1]
		const stringpVK9pqh = await LUPvepfDwx.symbol.call({from: accounts[0]});
//		const boola1db5L1 = await LUPvepfDwx.transfer.call(addressoeyLfEJ, uint70KNDg, {from: accounts[0]});
//		const boolk0rpMT1 = await LUPvepfDwx.freezeAccount.call(addressVjj1Pme, boolPlDA1nl, {from: accounts[0]});
//		const boolqj0GRJS = await LUPvepfDwx.freezeAccount.call(addressPniapiJ, boolZshMTOS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringpVK9pqh, "LUP")
		await expect(LUPvepfDwx.transfer.call(addressoeyLfEJ, uint70KNDg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtoJAKZ = await LUP.new({from: accounts[3]});
		const uintYCJ7Ics = BigInt("1115")
		const uintMTJgzQo = BigInt("1152")
		const addresst73mus = accounts[2]
		const addressHCyaso4 = accounts[5]
		const addressbWmJbr0 = accounts[0]
//		const boold9oP7yl = await LUPtoJAKZ.transferWithLock.call(addresst73mus, uintMTJgzQo, uintYCJ7Ics, {from: accounts[2]});
//		const addressRSvkPOp = await LUPtoJAKZ.notFrozen.call(addressHCyaso4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoo8ycB9 = await LUPtoJAKZ.notFrozen.call(addressbWmJbr0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LUPtoJAKZ.transferWithLock.call(addresst73mus, uintMTJgzQo, uintYCJ7Ics, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringE32gonc = "W7hZcpvqvmrN3HdDAcx9rRdhLUelA6oW7IYUVutFiUhrGsciRk2dqHB4Hu6G3t"
		const stringxAX5zEd = "TVPamruz6bhB0mvVxFpaWJjZjYEpu3DrQpzAsM5lKcnDjIXIiX5Y"
		const uintmOWrlKK = BigInt("253")
		const LUPoiJPZcb = await LUP.new(stringE32gonc, stringxAX5zEd, uintmOWrlKK, {from: accounts[4]});
		const uintAF2x8rL = BigInt("1100")
		const uintsgT3fhV = BigInt("810")
		const addresszRjjG1e = accounts[0]
		const uintjnKSA3y = BigInt("1212")
		const uintQS1vUka = BigInt("1848")
		const addressunLcEsf = accounts[1]
		const uintCECcWVZ = BigInt("1537")
		const addressuOg3ro = accounts[2]
		const boolPEO1Tm9 = await LUPoiJPZcb.lock.call(addresszRjjG1e, uintsgT3fhV, uintAF2x8rL, {from: accounts[1]});
		const boolDSIhI33 = await LUPoiJPZcb.lock.call(addressunLcEsf, uintQS1vUka, uintjnKSA3y, {from: accounts[1]});
		const uint8wTBE0va = await LUPoiJPZcb.decimals.call({from: accounts[2]});
		const boolLtexWjK = await LUPoiJPZcb.transfer.call(addressuOg3ro, uintCECcWVZ, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const addressIvOCAp = accounts[2]
		const uintmvCiFM = BigInt("869")
		const addressXaT3ZJd = accounts[1]
		const addressUfut8U8 = accounts[1]
//		const addressCqTxCRQ = await LUPnp3djNQ.notFrozen.call(addressIvOCAp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkLlJ3j = await LUPnp3djNQ.transfer.call(addressXaT3ZJd, uintmvCiFM, {from: accounts[5]});
//		const uint8vHFQt1 = await LUPnp3djNQ.decimals.call({from: accounts[1]});
//		const uint256JvqXnCF = await LUPnp3djNQ.balanceOf.call(addressUfut8U8, {from: accounts[2]});

		await expect(LUPnp3djNQ.notFrozen.call(addressIvOCAp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsFrw9cM = await LUP.new({from: accounts[4]});
		const uintbGliShG = BigInt("363")
		const uintEfgfDsJ = BigInt("1944")
		const addressJu6ZhRY = accounts[1]
		const uint8NpaB1UB = await LUPsFrw9cM.decimals.call({from: accounts[3]});
		const uint8LNBNwLg = await LUPsFrw9cM.decimals.call({from: accounts[2]});
		const boolXVHOzUy = await LUPsFrw9cM.transferWithLock.call(addressJu6ZhRY, uintEfgfDsJ, uintbGliShG, {from: accounts[4]});

		assert.equal(boolXVHOzUy, true)
		assert.equal(uint8LNBNwLg, BigInt("18"))
		assert.equal(uint8NpaB1UB, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const uintPsbPF9L = BigInt("869")
		const addressjItIncT = accounts[1]
		const addresscHp9UOR = accounts[2]
		const boolkLlJ3j = await LUPnp3djNQ.transfer.call(addressjItIncT, uintPsbPF9L, {from: accounts[5]});
		const uint8vHFQt1 = await LUPnp3djNQ.decimals.call({from: accounts[1]});
		const uint256JvqXnCF = await LUPnp3djNQ.balanceOf.call(addresscHp9UOR, {from: accounts[2]});

		assert.equal(boolkLlJ3j, true)
		assert.equal(uint256JvqXnCF, BigInt("0"))
		assert.equal(uint8vHFQt1, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPvepfDwx = await LUP.new({from: accounts[1]});
		const uintplMUGuc = BigInt("1608")
		const addressTO7M8En = "0x0000000000000000000000000000000000000000"
		const boolPlDA1nl = false
		const addressLF1fJ8R = accounts[1]
		const boolZshMTOS = false
		const addressooAUIyN = accounts[1]
		const stringpVK9pqh = await LUPvepfDwx.symbol.call({from: accounts[0]});
//		const boola1db5L1 = await LUPvepfDwx.transfer.call(addressTO7M8En, uintplMUGuc, {from: accounts[0]});
//		const boolk0rpMT1 = await LUPvepfDwx.freezeAccount.call(addressLF1fJ8R, boolPlDA1nl, {from: accounts[0]});
//		const boolqj0GRJS = await LUPvepfDwx.freezeAccount.call(addressooAUIyN, boolZshMTOS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringpVK9pqh, "LUP")
		await expect(LUPvepfDwx.transfer.call(addressTO7M8En, uintplMUGuc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const addressMsnJ11R = accounts[4]
		const addressjxqvqsr = accounts[2]
		const uint8vHFQt1 = await LUPnp3djNQ.decimals.call({from: accounts[1]});
//		const addressK9qyyb = await LUPnp3djNQ.upgradeTo.call(addressMsnJ11R, {from: accounts[2]});
//		const uint8XJC0is = await LUPnp3djNQ.decimals.call({from: accounts[1]});
//		const uint256eAex2la = await LUPnp3djNQ.balanceOf.call(addressjxqvqsr, {from: accounts[5]});

		assert.equal(uint8vHFQt1, BigInt("18"))
		await expect(LUPnp3djNQ.upgradeTo.call(addressMsnJ11R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const uint8vHFQt1 = await LUPnp3djNQ.decimals.call({from: accounts[1]});
		const stringgsLlfj = await LUPnp3djNQ.name.call({from: accounts[1]});

		assert.equal(stringgsLlfj, "LINKUP Token")
		assert.equal(uint8vHFQt1, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const uintxx9OGm0 = BigInt("869")
		const addressK5t8Rbv = accounts[1]
		const uint7snzxf = BigInt("126")
		const uintmSa3Id5 = BigInt("1201")
		const addresscCPcFOL = accounts[1]
		const addressTNC0Tv0 = accounts[3]
		const addressWJCuEY = accounts[2]
		const boolkLlJ3j = await LUPnp3djNQ.transfer.call(addressK5t8Rbv, uintxx9OGm0, {from: accounts[5]});
		const stringi27CkSU = await LUPnp3djNQ.name.call({from: accounts[0]});
//		const boolL85zf8o = await LUPnp3djNQ.lock.call(addresscCPcFOL, uintmSa3Id5, uint7snzxf, {from: accounts[5]});
//		const addressynGh2b = await LUPnp3djNQ.upgradeTo.call(addressTNC0Tv0, {from: accounts[3]});
//		const uint256JvqXnCF = await LUPnp3djNQ.balanceOf.call(addressWJCuEY, {from: accounts[2]});

		assert.equal(boolkLlJ3j, true)
		assert.equal(stringi27CkSU, "LINKUP Token")
		await expect(LUPnp3djNQ.lock.call(addresscCPcFOL, uintmSa3Id5, uint7snzxf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const uintsCGks0n = BigInt("837")
		const addressx7XS68U = accounts[1]
		const boolL1QqZNr = false
		const addressLThM0BV = accounts[5]
		const boolkLlJ3j = await LUPnp3djNQ.transfer.call(addressx7XS68U, uintsCGks0n, {from: accounts[5]});
		const boolP5VHn2M = await LUPnp3djNQ.freezeAccount.call(addressLThM0BV, boolL1QqZNr, {from: accounts[5]});

		assert.equal(boolP5VHn2M, true)
		assert.equal(boolkLlJ3j, true)
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const uintSwarkub = BigInt("869")
		const address38vhx6 = accounts[1]
		const addressQrAkUxf = accounts[0]
		const addressQOpqlPl = accounts[3]
		const uintW4GcXIZ = BigInt("1195")
		const uintfYCcStl = BigInt("1495")
		const addresstTyKShE = "0x0000000000000000000000000000000000000001"
		const addressaRbiY70 = accounts[2]
		const boolkLlJ3j = await LUPnp3djNQ.transfer.call(address38vhx6, uintSwarkub, {from: accounts[5]});
		const stringi27CkSU = await LUPnp3djNQ.name.call({from: accounts[0]});
		const addressd92BYP1 = await LUPnp3djNQ.upgradeTo.call(addressQrAkUxf, {from: accounts[5]});
		const uint256gTlkUq5 = await LUPnp3djNQ.balanceOf.call(addressQOpqlPl, {from: accounts[2]});
//		const boolxrnEb3g = await LUPnp3djNQ.transferWithLock.call(addresstTyKShE, uintfYCcStl, uintW4GcXIZ, {from: accounts[3]});
//		const uint256JvqXnCF = await LUPnp3djNQ.balanceOf.call(addressaRbiY70, {from: accounts[2]});

		assert.equal(boolkLlJ3j, true)
		assert.equal(stringi27CkSU, "LINKUP Token")
		assert.equal(uint256gTlkUq5, BigInt("0"))
		await expect(LUPnp3djNQ.transferWithLock.call(addresstTyKShE, uintfYCcStl, uintW4GcXIZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPnp3djNQ = await LUP.new({from: accounts[5]});
		const uintXm4rCN = BigInt("869")
		const addressWfc8n2Z = accounts[1]
		const uintGQsMvel = BigInt("984")
		const address8yu7Ki = accounts[1]
		const uintma21CZ7 = BigInt("1566")
		const uintenL0Q8a = BigInt("79")
		const addressjGu7Xgn = accounts[4]
		const uintyShh4cs = BigInt("114")
		const uinta8hw7uR = BigInt("1201")
		const addresssdWjyED = accounts[1]
		const addressdSyCKo5 = accounts[3]
		const addressSnrSMpp = accounts[2]
		const boolkLlJ3j = await LUPnp3djNQ.transfer.call(addressWfc8n2Z, uintXm4rCN, {from: accounts[5]});
		const uint8GVHne4Z = await LUPnp3djNQ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8qjd0RiL = await LUPnp3djNQ.decimals.call({from: accounts[1]});
//		const boolxnYPNN8 = await LUPnp3djNQ.unlock.call(address8yu7Ki, uintGQsMvel, {from: accounts[5]});
//		const booli7DqUl2 = await LUPnp3djNQ.transferWithLock.call(addressjGu7Xgn, uintenL0Q8a, uintma21CZ7, {from: accounts[1]});
//		const stringi27CkSU = await LUPnp3djNQ.name.call({from: accounts[0]});
//		const boolL85zf8o = await LUPnp3djNQ.lock.call(addresssdWjyED, uinta8hw7uR, uintyShh4cs, {from: accounts[5]});
//		const addressynGh2b = await LUPnp3djNQ.upgradeTo.call(addressdSyCKo5, {from: accounts[3]});
//		const uint256JvqXnCF = await LUPnp3djNQ.balanceOf.call(addressSnrSMpp, {from: accounts[2]});

		assert.equal(boolkLlJ3j, true)
		assert.equal(uint8GVHne4Z, BigInt("18"))
		assert.equal(uint8qjd0RiL, BigInt("18"))
		await expect(LUPnp3djNQ.unlock.call(address8yu7Ki, uintGQsMvel, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPzpWPzLv = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const boolo4Y4Zqr = true
		const addresseOkFBYv = accounts[3]
		const uintOUrKqkN = BigInt("1872")
		const addressjiFYvyC = accounts[3]
		const boolC2U1YHd = await LUPzpWPzLv.freezeAccount.call(addresseOkFBYv, boolo4Y4Zqr, {from: accounts[2]});
		const boolXSprDYx = await LUPzpWPzLv.transfer.call(addressjiFYvyC, uintOUrKqkN, {from: accounts[4]});
	});
})