const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTbgwOyE = await PACT.new({from: accounts[1]});
		const uintfo8v8g = BigInt("1055")
		const addressdnPRdi = accounts[5]
		const addressQ49SaLb = accounts[1]
		const addressnvrT6Kp = accounts[5]
//		const boolI8yHJfi = await PACTbgwOyE.transferFrom.call(addressQ49SaLb, addressdnPRdi, uintfo8v8g, {from: accounts[4]});
//		const stringrHhos0o = await PACTbgwOyE.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint8hNrc7la = await PACTbgwOyE.decimals.call({from: accounts[1]});
//		const boolp9xDPuE = await PACTbgwOyE.setupTeam.call(addressnvrT6Kp, {from: accounts[2]});

		await expect(PACTbgwOyE.transferFrom.call(addressQ49SaLb, addressdnPRdi, uintfo8v8g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTWuQoQZ7 = await PACT.new({from: accounts[1]});
		const uintqV5F7XV = BigInt("1558")
		const addressf5ZWRf2 = accounts[3]
//		const boolULSZS0 = await PACTWuQoQZ7.burn.call(addressf5ZWRf2, uintqV5F7XV, {from: accounts[4]});
//		const stringEA9yOJx = await PACTWuQoQZ7.name.call({from: accounts[1]});
//		const uintUGTArS2 = await PACTWuQoQZ7.totalSupply.call({from: accounts[2]});

		await expect(PACTWuQoQZ7.burn.call(addressf5ZWRf2, uintqV5F7XV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTw8whTDC = await PACT.new({from: accounts[5]});
		const addressjIMwhSg = accounts[3]
		const uintGrYRJx0 = BigInt("421")
		const addressug3nLqc = accounts[2]
		const uintIaU9nQL = BigInt("681")
		const addressqQQ7u61 = accounts[4]
		const addressqT7v35w = accounts[1]
		const uintmwaw9XS = BigInt("1590")
		const addressSu1BkvP = accounts[3]
		const uintguWSCro = await PACTw8whTDC.balanceOf.call(addressjIMwhSg, {from: "0x0000000000000000000000000000000000000001"});
		const boolIXR3I06 = await PACTw8whTDC.approve.call(addressug3nLqc, uintGrYRJx0, {from: accounts[3]});
//		const booliFu1C7d = await PACTw8whTDC.transferFrom.call(addressqT7v35w, addressqQQ7u61, uintIaU9nQL, {from: accounts[2]});
//		const boolBVwSrpU = await PACTw8whTDC.transfer.call(addressSu1BkvP, uintmwaw9XS, {from: accounts[0]});

		assert.equal(boolIXR3I06, true)
		assert.equal(uintguWSCro, BigInt("0"))
		await expect(PACTw8whTDC.transferFrom.call(addressqT7v35w, addressqQQ7u61, uintIaU9nQL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThM4guI = await PACT.new({from: accounts[4]});
		const addressfl1R2mR = accounts[5]
		const addressToGkr8O = accounts[2]
		const stringFLB9TqM = await PACThM4guI.symbol.call({from: accounts[1]});
		const uintgUIieu = await PACThM4guI.allowance.call(addressToGkr8O, addressfl1R2mR, {from: accounts[3]});

		assert.equal(stringFLB9TqM, "PACT")
		assert.equal(uintgUIieu, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTLrFEEa = await PACT.new({from: accounts[4]});
		const addressbVoYeg5 = accounts[1]
		const addresstahgVqJ = accounts[3]
		const addressHYbAoHB = accounts[1]
		const addresskcXfGiT = accounts[2]
		const uintW9NiWVk = await PACTLrFEEa.totalSupply.call({from: accounts[0]});
//		const boolBNT210 = await PACTLrFEEa.setupBasePool.call(addressbVoYeg5, {from: accounts[1]});
//		const boolv1wjVyP = await PACTLrFEEa.setupTeam.call(addresstahgVqJ, {from: accounts[1]});
//		const uintHmwf1oP = await PACTLrFEEa.allowance.call(addresskcXfGiT, addressHYbAoHB, {from: accounts[0]});

		assert.equal(uintW9NiWVk, BigInt("1000000000000000000000000000"))
		await expect(PACTLrFEEa.setupBasePool.call(addressbVoYeg5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTyPV9649 = await PACT.new({from: accounts[5]});
		const uintbquKGhV = BigInt("466")
		const addressLNDtmki = accounts[4]
		const stringTlsuxf = await PACTyPV9649.symbol.call({from: accounts[4]});
//		const boolFUkWkCl = await PACTyPV9649.transfer.call(addressLNDtmki, uintbquKGhV, {from: accounts[0]});

		assert.equal(stringTlsuxf, "PACT")
		await expect(PACTyPV9649.transfer.call(addressLNDtmki, uintbquKGhV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGZNfESw = await PACT.new({from: accounts[1]});
		const uintqv6kimC = BigInt("1480")
		const addressWnOlFFf = accounts[1]
		const addressbFQgApO = accounts[2]
		const addressh4uOD2Y = accounts[0]
		const uint8Ug5HroH = await PACTGZNfESw.decimals.call({from: accounts[3]});
//		const boolw0vvlhj = await PACTGZNfESw.transfer.call(addressWnOlFFf, uintqv6kimC, {from: "0x0000000000000000000000000000000000000001"});
//		const stringnpirSnS = await PACTGZNfESw.name.call({from: accounts[0]});
//		const boolM3WoAD = await PACTGZNfESw.setupTeam.call(addressbFQgApO, {from: accounts[5]});
//		const boolIC1IWJC = await PACTGZNfESw.setupBasePool.call(addressh4uOD2Y, {from: accounts[2]});

		assert.equal(uint8Ug5HroH, BigInt("18"))
		await expect(PACTGZNfESw.transfer.call(addressWnOlFFf, uintqv6kimC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTM0UWBJU = await PACT.new({from: accounts[4]});
		const addressr5olMj9 = accounts[0]
		const addressMgEd6wT = accounts[5]
		const addressN9yvDLq = accounts[2]
		const addressEAitqhP = accounts[1]
		const uintPOu0bRo = BigInt("451")
		const addressTPlMHnP = accounts[0]
		const addressgomjh8 = "0x0000000000000000000000000000000000000001"
//		const boolQo6QApl = await PACTM0UWBJU.setupFarming.call(addressr5olMj9, {from: accounts[1]});
//		const boolblMVdGW = await PACTM0UWBJU.setupTeam.call(addressMgEd6wT, {from: accounts[4]});
//		const boolgIrOWWJ = await PACTM0UWBJU.setupBasePool.call(addressN9yvDLq, {from: accounts[3]});
//		const uintwzPVCzN = await PACTM0UWBJU.totalSupply.call({from: accounts[1]});
//		const uintSLfnTIn = await PACTM0UWBJU.balanceOf.call(addressEAitqhP, {from: accounts[4]});
//		const boolX5kIl2 = await PACTM0UWBJU.transferFrom.call(addressgomjh8, addressTPlMHnP, uintPOu0bRo, {from: accounts[0]});

		await expect(PACTM0UWBJU.setupFarming.call(addressr5olMj9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThM4guI = await PACT.new({from: accounts[4]});
		const addressoXAwLf8 = accounts[1]
		const addressW6hVXny = accounts[5]
		const addresseaP9j7N = accounts[3]
		const stringFLB9TqM = await PACThM4guI.symbol.call({from: accounts[1]});
//		const boola8QlM7X = await PACThM4guI.setupReserve.call(addressoXAwLf8, {from: accounts[3]});
//		const stringJgYfFfR = await PACThM4guI.symbol.call({from: accounts[3]});
//		const uintgUIieu = await PACThM4guI.allowance.call(addresseaP9j7N, addressW6hVXny, {from: accounts[3]});

		assert.equal(stringFLB9TqM, "PACT")
		await expect(PACThM4guI.setupReserve.call(addressoXAwLf8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLrFEEa = await PACT.new({from: accounts[4]});
		const addressomF4FIU = accounts[3]
		const addressIXoYLUO = accounts[1]
		const addressn71tIQy = accounts[3]
		const uintW9NiWVk = await PACTLrFEEa.totalSupply.call({from: accounts[0]});
//		const boolv1wjVyP = await PACTLrFEEa.setupTeam.call(addressomF4FIU, {from: accounts[1]});
//		const uint8YceFecz = await PACTLrFEEa.decimals.call({from: accounts[4]});
//		const uintHmwf1oP = await PACTLrFEEa.allowance.call(addressn71tIQy, addressIXoYLUO, {from: accounts[0]});

		assert.equal(uintW9NiWVk, BigInt("1000000000000000000000000000"))
		await expect(PACTLrFEEa.setupTeam.call(addressomF4FIU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTyPV9649 = await PACT.new({from: accounts[5]});
		const uintZfYTUq9 = BigInt("466")
		const addressR5aAARH = accounts[4]
		const stringTlsuxf = await PACTyPV9649.symbol.call({from: accounts[4]});
		const stringpCrY6CG = await PACTyPV9649.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uintUGH7s4N = await PACTyPV9649.totalSupply.call({from: accounts[2]});
//		const boolFUkWkCl = await PACTyPV9649.transfer.call(addressR5aAARH, uintZfYTUq9, {from: accounts[0]});

		assert.equal(stringTlsuxf, "PACT")
		assert.equal(stringpCrY6CG, "P2PB2B community token")
		assert.equal(uintUGH7s4N, BigInt("1000000000000000000000000000"))
		await expect(PACTyPV9649.transfer.call(addressR5aAARH, uintZfYTUq9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTlpiv3P = await PACT.new({from: accounts[4]});
		const addressKa51yQN = accounts[2]
		const uintufmQC8X = await PACTlpiv3P.totalSupply.call({from: accounts[2]});
//		const boolTd0HNEo = await PACTlpiv3P.setupRewards.call(addressKa51yQN, {from: accounts[3]});
//		const stringzSqaHa6 = await PACTlpiv3P.name.call({from: accounts[1]});

		assert.equal(uintufmQC8X, BigInt("1000000000000000000000000000"))
		await expect(PACTlpiv3P.setupRewards.call(addressKa51yQN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTdU6igO = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK7DOvye = BigInt("136")
		const addressvTVhzS9 = accounts[0]
		const addressQdXNJFK = accounts[3]
		const boolhnt7maH = await PACTdU6igO.approve.call(addressvTVhzS9, uintK7DOvye, {from: accounts[5]});
		const uint8BMaOT0 = await PACTdU6igO.decimals.call({from: accounts[0]});
		const boolvnKVRrz = await PACTdU6igO.setupRewards.call(addressQdXNJFK, {from: accounts[3]});
	});
})