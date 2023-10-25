const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPRvqbUVb = await LUP.new({from: accounts[2]});
		const addressjAnw1qN = accounts[4]
		const addressL6H4xP5 = await LUPRvqbUVb.notFrozen.call(addressjAnw1qN, {from: accounts[5]});
		const stringwx30H71 = await LUPRvqbUVb.symbol.call({from: accounts[2]});

		await expect(LUPRvqbUVb.notFrozen.call(addressjAnw1qN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringwLUD7BC = "CeOsfjuFOoAIaY9G5c7wa0Y"
		const stringqsP8Z0h = "six"
		const uintWam7L2 = BigInt("90")
		const LUPuEXt17P = await LUP.new(stringwLUD7BC, stringqsP8Z0h, uintWam7L2, {from: accounts[4]});
		const addressumXJHet = accounts[2]
		const uintcUoCx8A = BigInt("529")
		const addressG2lloac = accounts[4]
		const addresslqIR4PA = accounts[3]
		const uintjHwd3DM = BigInt("1453")
		const addressnLCiogU = accounts[0]
		const uintCE8HpVw = BigInt("1490")
		const uintQ2ArJFc = BigInt("1468")
		const addresstFF3JdL = accounts[2]
		const addressx94sdem = await LUPuEXt17P.upgradeTo.call(addressumXJHet, {from: accounts[2]});
		const boolICA7VCo = await LUPuEXt17P.unlock.call(addressG2lloac, uintcUoCx8A, {from: accounts[5]});
		const uint256KdBVKbq = await LUPuEXt17P.balanceOf.call(addresslqIR4PA, {from: accounts[3]});
		const booldLhNYr = await LUPuEXt17P.unlock.call(addressnLCiogU, uintjHwd3DM, {from: accounts[2]});
		const stringF72t0fK = await LUPuEXt17P.name.call({from: accounts[1]});
		const booleWXgz7l = await LUPuEXt17P.transferWithLock.call(addresstFF3JdL, uintQ2ArJFc, uintCE8HpVw, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPHOqkvPT = await LUP.new({from: accounts[4]});
		const boolS3i1YG = true
		const addresswkv4PqL = accounts[2]
		const uintRgXeNVf = BigInt("855")
		const uintuZx89p = BigInt("137")
		const addressCzArHD1 = accounts[2]
		const addressvpsxwsL = accounts[4]
		const boolaLCDUq6 = await LUPHOqkvPT.freezeAccount.call(addresswkv4PqL, boolS3i1YG, {from: accounts[2]});
		const uint8MbVLnyC = await LUPHOqkvPT.decimals.call({from: accounts[4]});
		const boolEsTEXye = await LUPHOqkvPT.lock.call(addressCzArHD1, uintuZx89p, uintRgXeNVf, {from: accounts[3]});
		const uint256OchcNJO = await LUPHOqkvPT.balanceOf.call(addressvpsxwsL, {from: accounts[4]});

		await expect(LUPHOqkvPT.freezeAccount.call(addresswkv4PqL, boolS3i1YG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdGfGE32 = await LUP.new({from: accounts[2]});
		const addresstXl7F7F = accounts[3]
		const addresseEjTUVt = accounts[3]
		const uint256UcYVX6r = await LUPdGfGE32.balanceOf.call(addresstXl7F7F, {from: accounts[1]});
		const uint256MapY0to = await LUPdGfGE32.balanceOf.call(addresseEjTUVt, {from: accounts[1]});
		const stringefwDasL = await LUPdGfGE32.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringefwDasL, "LUP")
		assert.equal(uint256MapY0to, BigInt("0"))
		assert.equal(uint256UcYVX6r, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPCjSU2Ra = await LUP.new({from: accounts[2]});
		const addressBKCORIC = "0x0000000000000000000000000000000000000001"
		const addressrCZElD = "0x0000000000000000000000000000000000000001"
		const uintD4qvnpr = BigInt("88")
		const uintYceruGE = BigInt("983")
		const addressnBeyBOr = accounts[4]
		const uintxq9b7Cw = BigInt("257")
		const uintznTzPWH = BigInt("1754")
		const addressX2AJIbc = accounts[5]
		const boolIDUdVA5 = false
		const addresshHqcrD0 = accounts[3]
		const uint8JNZToai = await LUPCjSU2Ra.decimals.call({from: accounts[1]});
		const addressr1oi3h = await LUPCjSU2Ra.upgradeTo.call(addressBKCORIC, {from: accounts[2]});
		const addressrnctLd = await LUPCjSU2Ra.notFrozen.call(addressrCZElD, {from: accounts[1]});
		const boolmASFIaR = await LUPCjSU2Ra.lock.call(addressnBeyBOr, uintYceruGE, uintD4qvnpr, {from: accounts[2]});
		const boole1LFFRe = await LUPCjSU2Ra.transferWithLock.call(addressX2AJIbc, uintznTzPWH, uintxq9b7Cw, {from: accounts[3]});
		const boolJAGraf = await LUPCjSU2Ra.freezeAccount.call(addresshHqcrD0, boolIDUdVA5, {from: accounts[1]});

		assert.equal(uint8JNZToai, BigInt("18"))
		await expect(LUPCjSU2Ra.notFrozen.call(addressrCZElD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPRvqbUVb = await LUP.new({from: accounts[2]});
		const uintNWLBv9U = BigInt("575")
		const addresswFCxxUd = accounts[4]
		const uintVS4JAQ2 = BigInt("1612")
		const addressjXwvQpb = "0x0000000000000000000000000000000000000001"
		const addressVHOl3k9 = accounts[5]
		const boolpczphZT = await LUPRvqbUVb.transfer.call(addresswFCxxUd, uintNWLBv9U, {from: accounts[3]});
		const boolw9uQRVE = await LUPRvqbUVb.unlock.call(addressjXwvQpb, uintVS4JAQ2, {from: accounts[4]});
		const addressL6H4xP5 = await LUPRvqbUVb.notFrozen.call(addressVHOl3k9, {from: accounts[5]});
		const stringwx30H71 = await LUPRvqbUVb.symbol.call({from: accounts[2]});

		await expect(LUPRvqbUVb.transfer.call(addresswFCxxUd, uintNWLBv9U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdGfGE32 = await LUP.new({from: accounts[2]});
		const addressgphbL7B = accounts[3]
		const boolWWrLiUz = false
		const addressezTUALw = accounts[2]
		const addressoSKsKI = accounts[3]
		const uint256UcYVX6r = await LUPdGfGE32.balanceOf.call(addressgphbL7B, {from: accounts[1]});
		const booljw39caU = await LUPdGfGE32.freezeAccount.call(addressezTUALw, boolWWrLiUz, {from: accounts[2]});
		const uint256MapY0to = await LUPdGfGE32.balanceOf.call(addressoSKsKI, {from: accounts[1]});
		const stringefwDasL = await LUPdGfGE32.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljw39caU, true)
		assert.equal(stringefwDasL, "LUP")
		assert.equal(uint256MapY0to, BigInt("0"))
		assert.equal(uint256UcYVX6r, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPdGfGE32 = await LUP.new({from: accounts[2]});
		const addressXJzZlyv = accounts[4]
		const addressrlyySfR = accounts[1]
		const addresscfx1Co6 = accounts[4]
		const uintK0XBJ3g = BigInt("731")
		const uintECvPnRs = BigInt("875")
		const addressMuqd10i = accounts[3]
		const uint256UcYVX6r = await LUPdGfGE32.balanceOf.call(addressXJzZlyv, {from: accounts[1]});
		const uint256IvLUmKX = await LUPdGfGE32.balanceOf.call(addressrlyySfR, {from: accounts[0]});
		const uint256MapY0to = await LUPdGfGE32.balanceOf.call(addresscfx1Co6, {from: accounts[1]});
		const boolZ3PCOM = await LUPdGfGE32.transferWithLock.call(addressMuqd10i, uintECvPnRs, uintK0XBJ3g, {from: accounts[2]});
		const stringefwDasL = await LUPdGfGE32.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringeG6oGwA = await LUPdGfGE32.name.call({from: accounts[2]});

		assert.equal(boolZ3PCOM, true)
		assert.equal(stringeG6oGwA, "LINKUP Token")
		assert.equal(stringefwDasL, "LUP")
		assert.equal(uint256IvLUmKX, BigInt("0"))
		assert.equal(uint256MapY0to, BigInt("0"))
		assert.equal(uint256UcYVX6r, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPdGfGE32 = await LUP.new({from: accounts[2]});
		const addressCWpuMKO = accounts[2]
		const addressnir3m0a = accounts[4]
		const addressmng95gV = accounts[3]
		const uintCHmU5ZB = BigInt("1708")
		const addressXu0AAjn = accounts[1]
		const uint256wn4cOyA = await LUPdGfGE32.balanceOf.call(addressCWpuMKO, {from: accounts[2]});
		const addressWi7YOHm = await LUPdGfGE32.upgradeTo.call(addressnir3m0a, {from: accounts[1]});
		const stringjZ8iMD8 = await LUPdGfGE32.symbol.call({from: accounts[1]});
		const uint256MTDTQ0t = await LUPdGfGE32.balanceOf.call(addressmng95gV, {from: accounts[2]});
		const boolNJqrlss = await LUPdGfGE32.transfer.call(addressXu0AAjn, uintCHmU5ZB, {from: accounts[1]});

		assert.equal(uint256wn4cOyA, BigInt("50000000000000000000000000"))
		await expect(LUPdGfGE32.upgradeTo.call(addressnir3m0a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdGfGE32 = await LUP.new({from: accounts[2]});
		const addressJe0GLRe = accounts[4]
		const uintjkBgqF5 = BigInt("514")
		const addressZHkQMWR = accounts[2]
		const uint256UcYVX6r = await LUPdGfGE32.balanceOf.call(addressJe0GLRe, {from: accounts[1]});
		const boolF61I4QS = await LUPdGfGE32.unlock.call(addressZHkQMWR, uintjkBgqF5, {from: accounts[2]});
		const stringMIcX3fD = await LUPdGfGE32.name.call({from: accounts[0]});
		const uint87GVExz = await LUPdGfGE32.decimals.call({from: accounts[2]});

		assert.equal(uint256UcYVX6r, BigInt("0"))
		await expect(LUPdGfGE32.unlock.call(addressZHkQMWR, uintjkBgqF5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPdGfGE32 = await LUP.new({from: accounts[2]});
		const addressaOQ7wWg = accounts[4]
		const uinteFLUng = BigInt("15")
		const uintTXZntRd = BigInt("145")
		const addressb7yD2PD = accounts[3]
		const uintViZm5Qj = BigInt("1717")
		const addressJ5BHBI5 = accounts[1]
		const uint256UcYVX6r = await LUPdGfGE32.balanceOf.call(addressaOQ7wWg, {from: accounts[1]});
		const uint8hPNv0Vo = await LUPdGfGE32.decimals.call({from: accounts[3]});
		const booltAtcD9 = await LUPdGfGE32.lock.call(addressb7yD2PD, uintTXZntRd, uinteFLUng, {from: accounts[2]});
		const boolNJqrlss = await LUPdGfGE32.transfer.call(addressJ5BHBI5, uintViZm5Qj, {from: accounts[1]});

		assert.equal(uint256UcYVX6r, BigInt("0"))
		assert.equal(uint8hPNv0Vo, BigInt("18"))
		await expect(LUPdGfGE32.lock.call(addressb7yD2PD, uintTXZntRd, uinteFLUng, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVCIwHqs = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGlobi9p = BigInt("1214")
		const addressfJOk0mo = accounts[3]
		const stringUNX5UCG = await LUPVCIwHqs.symbol.call({from: accounts[1]});
		const boolzXXLMba = await LUPVCIwHqs.transfer.call(addressfJOk0mo, uintGlobi9p, {from: accounts[1]});
	});
})