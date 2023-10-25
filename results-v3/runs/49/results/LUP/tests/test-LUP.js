const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPBVt82uu = await LUP.new({from: accounts[1]});
		const uintGTciC0N = BigInt("861")
		const uintTlIUMsy = BigInt("120")
		const addressWszXgtt = accounts[0]
		const addressW2Hr3qN = accounts[2]
		const uintnB2RhoX = BigInt("703")
		const uintHHUK2nL = BigInt("1846")
		const addressp7iL3cx = accounts[1]
		const stringoR67QNZ = await LUPBVt82uu.name.call({from: accounts[5]});
		const boolXe95Wcb = await LUPBVt82uu.transferWithLock.call(addressWszXgtt, uintTlIUMsy, uintGTciC0N, {from: accounts[1]});
		const uint8BkXewGI = await LUPBVt82uu.decimals.call({from: accounts[0]});
		const addressnctS8um = await LUPBVt82uu.notFrozen.call(addressW2Hr3qN, {from: accounts[1]});
		const boolYyXNxwR = await LUPBVt82uu.lock.call(addressp7iL3cx, uintHHUK2nL, uintnB2RhoX, {from: accounts[1]});

		assert.equal(boolXe95Wcb, true)
		assert.equal(stringoR67QNZ, "LINKUP Token")
		assert.equal(uint8BkXewGI, BigInt("18"))
		await expect(LUPBVt82uu.notFrozen.call(addressW2Hr3qN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringWCOF7gY = "PM4AFoDpmGG3ejFOqFEe3DU0OQPDXxPhBjC4ZQKvjdiSCAlH5Tf7kTqi9HUWqU"
		const stringt0QriWs = "eQNNkOF2EMdA9XIA5IwqmlL0F4v54LkfWjPKjufiOVfpcLBrSEvWtBYvRlOq2b2TVQT9pl63Y4dU7nHOgJHxfxwnir"
		const uintmZtCvAV = BigInt("240")
		const LUPY8HYGD8 = await LUP.new(stringWCOF7gY, stringt0QriWs, uintmZtCvAV, {from: accounts[1]});
		const uintJUjOGqF = BigInt("1231")
		const addressSBeGKOj = accounts[2]
		const uintJMFcMcs = BigInt("1235")
		const addressgeBiPjr = accounts[0]
		const addressgsw1cQv = accounts[4]
		const boolwPuW0Wo = await LUPY8HYGD8.unlock.call(addressSBeGKOj, uintJUjOGqF, {from: accounts[4]});
		const boolvzUWAqt = await LUPY8HYGD8.unlock.call(addressgeBiPjr, uintJMFcMcs, {from: accounts[5]});
		const addressZMqpn11 = await LUPY8HYGD8.upgradeTo.call(addressgsw1cQv, {from: accounts[2]});
		const stringR1Rfxm4 = await LUPY8HYGD8.symbol.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPEIZGQKN = await LUP.new({from: accounts[0]});
		const uintqe7wyz0 = BigInt("1019")
		const uintzKWZi9R = BigInt("1215")
		const addresse7atEV6 = accounts[4]
		const addressY6pBqIB = accounts[0]
		const uint8DoM2rMr = await LUPEIZGQKN.decimals.call({from: accounts[1]});
		const stringRdD201 = await LUPEIZGQKN.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolEKhmqUv = await LUPEIZGQKN.transferWithLock.call(addresse7atEV6, uintzKWZi9R, uintqe7wyz0, {from: accounts[2]});
		const addressCOspjmf = await LUPEIZGQKN.notFrozen.call(addressY6pBqIB, {from: accounts[4]});

		assert.equal(stringRdD201, "LUP")
		assert.equal(uint8DoM2rMr, BigInt("18"))
		await expect(LUPEIZGQKN.transferWithLock.call(addresse7atEV6, uintzKWZi9R, uintqe7wyz0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const uintqqkQRuG = BigInt("1153")
		const addressgNuOO5F = accounts[0]
		const uintSqPAEdk = BigInt("1572")
		const uintuxtIji9 = BigInt("500")
		const addresszQhFwtc = accounts[4]
		const uintxpZrcDL = BigInt("1816")
		const addressfsjZzF = "0x0000000000000000000000000000000000000001"
		const boolfuNYKX = await LUPOQzEaIu.transfer.call(addressgNuOO5F, uintqqkQRuG, {from: accounts[1]});
		const booluzV74UH = await LUPOQzEaIu.transferWithLock.call(addresszQhFwtc, uintuxtIji9, uintSqPAEdk, {from: accounts[3]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressfsjZzF, uintxpZrcDL, {from: accounts[2]});

		assert.equal(boolfuNYKX, true)
		await expect(LUPOQzEaIu.transferWithLock.call(addresszQhFwtc, uintuxtIji9, uintSqPAEdk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const uintf0mAPu3 = BigInt("1153")
		const addresswIGwntr = accounts[0]
		const uintoFyX1I8 = BigInt("1979")
		const uintmDvbQ1S = BigInt("625")
		const addressu76ZzDt = accounts[0]
		const uintVUMNku = BigInt("1572")
		const uintSSCXtVa = BigInt("500")
		const addressl0JvzU = accounts[4]
		const uintEethwc = BigInt("1816")
		const addressGiqg3rj = "0x0000000000000000000000000000000000000001"
		const boolfuNYKX = await LUPOQzEaIu.transfer.call(addresswIGwntr, uintf0mAPu3, {from: accounts[1]});
		const stringq271vyO = await LUPOQzEaIu.name.call({from: accounts[5]});
		const boolwbRm6C0 = await LUPOQzEaIu.lock.call(addressu76ZzDt, uintmDvbQ1S, uintoFyX1I8, {from: accounts[1]});
		const booluzV74UH = await LUPOQzEaIu.transferWithLock.call(addressl0JvzU, uintSSCXtVa, uintVUMNku, {from: accounts[3]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressGiqg3rj, uintEethwc, {from: accounts[2]});

		assert.equal(boolfuNYKX, true)
		assert.equal(stringq271vyO, "LINKUP Token")
		await expect(LUPOQzEaIu.lock.call(addressu76ZzDt, uintmDvbQ1S, uintoFyX1I8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const uintKiTbLJ5 = BigInt("1153")
		const addressqzLiqHf = accounts[0]
		const uintaisnL6M = BigInt("1816")
		const addressBzMDbV = "0x0000000000000000000000000000000000000001"
		const addressaf9PmJ = accounts[0]
		const boolfuNYKX = await LUPOQzEaIu.transfer.call(addressqzLiqHf, uintKiTbLJ5, {from: accounts[1]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressBzMDbV, uintaisnL6M, {from: accounts[2]});
		const uint256Lh32QAU = await LUPOQzEaIu.balanceOf.call(addressaf9PmJ, {from: accounts[4]});
		const stringaqXZqt7 = await LUPOQzEaIu.symbol.call({from: accounts[2]});

		assert.equal(boolfuNYKX, true)
		await expect(LUPOQzEaIu.transfer.call(addressBzMDbV, uintaisnL6M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const uint4cO0Et = BigInt("1816")
		const addressDgdxKRS = "0x0000000000000000000000000000000000000000"
		const addresssYnMR1C = accounts[1]
		const uint8LdeVNJx = await LUPOQzEaIu.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressDgdxKRS, uint4cO0Et, {from: accounts[2]});
		const addressbKn6xEL = await LUPOQzEaIu.upgradeTo.call(addresssYnMR1C, {from: accounts[4]});

		assert.equal(uint8LdeVNJx, BigInt("18"))
		await expect(LUPOQzEaIu.transfer.call(addressDgdxKRS, uint4cO0Et, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const addressf06iqX0 = accounts[2]
		const uintILPksKY = BigInt("1816")
		const addressblOsdyQ = "0x0000000000000000000000000000000000000002"
		const boolMfoz4KG = false
		const addresse8Dw9Da = accounts[2]
		const addressrZrTxW = await LUPOQzEaIu.upgradeTo.call(addressf06iqX0, {from: accounts[3]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressblOsdyQ, uintILPksKY, {from: accounts[2]});
		const booliT506N5 = await LUPOQzEaIu.freezeAccount.call(addresse8Dw9Da, boolMfoz4KG, {from: accounts[4]});

		await expect(LUPOQzEaIu.upgradeTo.call(addressf06iqX0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const boolDWdoOHq = true
		const addressBcUhqhU = accounts[4]
		const uintrytvrvs = BigInt("1816")
		const addressrmKOUqh = "0x0000000000000000000000000000000000000001"
		const boolIstboQ1 = await LUPOQzEaIu.freezeAccount.call(addressBcUhqhU, boolDWdoOHq, {from: accounts[1]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressrmKOUqh, uintrytvrvs, {from: accounts[2]});

		assert.equal(boolIstboQ1, true)
		await expect(LUPOQzEaIu.transfer.call(addressrmKOUqh, uintrytvrvs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const addresspvjfpbW = accounts[3]
		const uintIEAeCyp = BigInt("1816")
		const addressVa1uhiZ = "0x0000000000000000000000000000000000000000"
		const uint256rhxqCh1 = await LUPOQzEaIu.balanceOf.call(addresspvjfpbW, {from: accounts[1]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressVa1uhiZ, uintIEAeCyp, {from: accounts[2]});

		assert.equal(uint256rhxqCh1, BigInt("0"))
		await expect(LUPOQzEaIu.transfer.call(addressVa1uhiZ, uintIEAeCyp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const addressJP6Mg5j = accounts[4]
		const uintXcnQeEZ = BigInt("1851")
		const addressYp1kmoq = "0x0000000000000000000000000000000000000001"
		const addressg7DHxi9 = await LUPOQzEaIu.upgradeTo.call(addressJP6Mg5j, {from: accounts[1]});
		const uint8gq2jSsg = await LUPOQzEaIu.decimals.call({from: accounts[4]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressYp1kmoq, uintXcnQeEZ, {from: accounts[2]});

		assert.equal(uint8gq2jSsg, BigInt("18"))
		await expect(LUPOQzEaIu.transfer.call(addressYp1kmoq, uintXcnQeEZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const uintOOzUNCm = BigInt("274")
		const addressMPRK5YJ = accounts[1]
		const uintdZQVC5f = BigInt("1816")
		const addresseK33HUC = "0x0000000000000000000000000000000000000001"
		const uintAE6fHed = BigInt("1029")
		const uintio78yC9 = BigInt("1582")
		const addresskJ1PlBi = accounts[4]
		const boolKqr52c9 = await LUPOQzEaIu.unlock.call(addressMPRK5YJ, uintOOzUNCm, {from: accounts[1]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addresseK33HUC, uintdZQVC5f, {from: accounts[2]});
		const boolcoYqsls = await LUPOQzEaIu.transferWithLock.call(addresskJ1PlBi, uintio78yC9, uintAE6fHed, {from: accounts[2]});

		await expect(LUPOQzEaIu.unlock.call(addressMPRK5YJ, uintOOzUNCm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIMIqidf = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYVgG2ZS = accounts[3]
		const uint8GRFYpM = await LUPIMIqidf.decimals.call({from: accounts[5]});
		const uint256G7YcTI8 = await LUPIMIqidf.balanceOf.call(addressYVgG2ZS, {from: accounts[3]});
		const uint8BFwxzZF = await LUPIMIqidf.decimals.call({from: accounts[1]});
		const stringR2X9Der = await LUPIMIqidf.name.call({from: accounts[5]});
		const uint8YzoOriD = await LUPIMIqidf.decimals.call({from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPOQzEaIu = await LUP.new({from: accounts[1]});
		const uintTgBCAI4 = BigInt("487")
		const uintkckaz3r = BigInt("12")
		const addressCi7c4La = accounts[1]
		const uintB1S7Dmx = BigInt("1816")
		const addressIf8rGs = "0x0000000000000000000000000000000000000002"
		const boolTCJP40X = await LUPOQzEaIu.lock.call(addressCi7c4La, uintkckaz3r, uintTgBCAI4, {from: accounts[1]});
		const boolxLo8jq0 = await LUPOQzEaIu.transfer.call(addressIf8rGs, uintB1S7Dmx, {from: accounts[2]});

		assert.equal(boolTCJP40X, true)
		await expect(LUPOQzEaIu.transfer.call(addressIf8rGs, uintB1S7Dmx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})