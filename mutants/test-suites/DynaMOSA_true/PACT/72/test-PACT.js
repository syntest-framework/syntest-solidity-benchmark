const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTYkxuB4 = await PACT.new({from: accounts[4]});
		const addressfnhjY8i = accounts[0]
		const addressObOfmtN = accounts[0]
		const addressyiWR5Oj = accounts[4]
		const addressDbi9K0C = accounts[3]
		const addressjE9GJhB = accounts[2]
		const addressSyY2F6P = accounts[0]
		const addressY6cAiTH = accounts[2]
//		const boolnRJJ5LZ = await PACTYkxuB4.setupBasePool.call(addressfnhjY8i, {from: accounts[0]});
//		const uintuqvU2MP = await PACTYkxuB4.allowance.call(addressyiWR5Oj, addressObOfmtN, {from: accounts[0]});
//		const uintT3cik8n = await PACTYkxuB4.balanceOf.call(addressDbi9K0C, {from: accounts[4]});
//		const uintSjdAd9J = await PACTYkxuB4.allowance.call(addressSyY2F6P, addressjE9GJhB, {from: accounts[1]});
//		const boolrsoCZ4Y = await PACTYkxuB4.setupFarming.call(addressY6cAiTH, {from: accounts[4]});

		await expect(PACTYkxuB4.setupBasePool.call(addressfnhjY8i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTy3s1nZ = await PACT.new({from: accounts[2]});
		const uintDyxB3JY = BigInt("1457")
		const addressBL7QsqP = accounts[3]
		const addressaAhdErN = accounts[0]
		const addressg1o1AUY = accounts[4]
		const addresskFAiz6Q = accounts[3]
//		const boolAaO23Pp = await PACTy3s1nZ.transferFrom.call(addressaAhdErN, addressBL7QsqP, uintDyxB3JY, {from: accounts[4]});
//		const stringlfhuh1B = await PACTy3s1nZ.symbol.call({from: accounts[1]});
//		const uintQYzok6R = await PACTy3s1nZ.allowance.call(addresskFAiz6Q, addressg1o1AUY, {from: accounts[1]});

		await expect(PACTy3s1nZ.transferFrom.call(addressaAhdErN, addressBL7QsqP, uintDyxB3JY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkJSNCKA = await PACT.new({from: accounts[0]});
		const uintu4NVswK = BigInt("1205")
		const addressk3PpJhy = accounts[2]
		const uint8uFdeCSI = await PACTkJSNCKA.decimals.call({from: accounts[5]});
		const boolGhyKzQv = await PACTkJSNCKA.approve.call(addressk3PpJhy, uintu4NVswK, {from: accounts[1]});

		assert.equal(boolGhyKzQv, true)
		assert.equal(uint8uFdeCSI, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTStBOtv = await PACT.new({from: accounts[1]});
		const addressKgJwzx1 = accounts[5]
		const uintdtq55gJ = BigInt("533")
		const addressIBVyMUG = accounts[3]
		const uintTvYGxyN = BigInt("250")
		const addressNxSArUQ = accounts[0]
		const uintRSCPPqK = await PACTStBOtv.totalSupply.call({from: accounts[4]});
		const uinty93Avdl = await PACTStBOtv.balanceOf.call(addressKgJwzx1, {from: accounts[3]});
//		const boolcMzkPMb = await PACTStBOtv.transfer.call(addressIBVyMUG, uintdtq55gJ, {from: accounts[2]});
//		const stringtKI9xT3 = await PACTStBOtv.name.call({from: accounts[4]});
//		const boolvedOk4j = await PACTStBOtv.approve.call(addressNxSArUQ, uintTvYGxyN, {from: accounts[3]});

		assert.equal(uintRSCPPqK, BigInt("1000000000000000000000000000"))
		assert.equal(uinty93Avdl, BigInt("0"))
		await expect(PACTStBOtv.transfer.call(addressIBVyMUG, uintdtq55gJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkdXFsER = await PACT.new({from: accounts[4]});
		const addressIHujJ0n = accounts[2]
		const stringcC0vD12 = await PACTkdXFsER.name.call({from: accounts[0]});
//		const booloxAScXv = await PACTkdXFsER.setupBasePool.call(addressIHujJ0n, {from: accounts[3]});
//		const stringcWYTWgK = await PACTkdXFsER.name.call({from: accounts[4]});
//		const stringHsALEHG = await PACTkdXFsER.symbol.call({from: accounts[5]});

		assert.equal(stringcC0vD12, "P2PB2B community token")
		await expect(PACTkdXFsER.setupBasePool.call(addressIHujJ0n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACToGSRow = await PACT.new({from: accounts[3]});
		const addresscDmULUb = accounts[3]
		const addressQ7UKCh5 = accounts[1]
//		const boolF5yJwIZ = await PACToGSRow.setupReserve.call(addresscDmULUb, {from: accounts[2]});
//		const stringWefL7P = await PACToGSRow.symbol.call({from: accounts[3]});
//		const boolPPBt4zk = await PACToGSRow.setupRewards.call(addressQ7UKCh5, {from: accounts[4]});
//		const uintciv4Ahn = await PACToGSRow.totalSupply.call({from: accounts[1]});

		await expect(PACToGSRow.setupReserve.call(addresscDmULUb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTZF8Mjow = await PACT.new({from: accounts[4]});
		const addressewGZdUG = accounts[4]
		const addresslQYwv8a = accounts[3]
		const address7D0N8C = accounts[1]
		const uintsXn7dxK = BigInt("825")
		const addressG9e3Ez = accounts[0]
		const uintQRfS3ZC = await PACTZF8Mjow.allowance.call(addresslQYwv8a, addressewGZdUG, {from: accounts[2]});
		const stringwcT7kxc = await PACTZF8Mjow.symbol.call({from: accounts[1]});
//		const boolsbXYiFO = await PACTZF8Mjow.setupBasePool.call(address7D0N8C, {from: accounts[1]});
//		const boolD8T8MWA = await PACTZF8Mjow.approve.call(addressG9e3Ez, uintsXn7dxK, {from: accounts[3]});

		assert.equal(stringwcT7kxc, "PACT")
		assert.equal(uintQRfS3ZC, BigInt("0"))
		await expect(PACTZF8Mjow.setupBasePool.call(address7D0N8C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTt3Qwj3E = await PACT.new({from: accounts[0]});
		const addressysB3jb = accounts[0]
		const uintt013bca = BigInt("1100")
		const addressv699nF9 = accounts[2]
		const stringirijixe = await PACTt3Qwj3E.name.call({from: accounts[3]});
		const stringrnvNBys = await PACTt3Qwj3E.name.call({from: accounts[2]});
//		const boolurVMThA = await PACTt3Qwj3E.setupTeam.call(addressysB3jb, {from: accounts[0]});
//		const boolkBqOTFm = await PACTt3Qwj3E.burn.call(addressv699nF9, uintt013bca, {from: accounts[4]});

		assert.equal(stringirijixe, "P2PB2B community token")
		assert.equal(stringrnvNBys, "P2PB2B community token")
		await expect(PACTt3Qwj3E.setupTeam.call(addressysB3jb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvIg0uhr = await PACT.new({from: accounts[1]});
		const addressrlM5ZtN = accounts[2]
		const addressHUVxua = accounts[1]
		const addressiKff8M = accounts[4]
		const addressc9R6R54 = accounts[3]
		const stringrReA3D = await PACTvIg0uhr.name.call({from: accounts[0]});
//		const boolsTR0Luq = await PACTvIg0uhr.setupRewards.call(addressrlM5ZtN, {from: accounts[0]});
//		const boolPiMELnb = await PACTvIg0uhr.setupTeam.call(addressHUVxua, {from: "0x0000000000000000000000000000000000000001"});
//		const stringJcqNdP = await PACTvIg0uhr.symbol.call({from: accounts[0]});
//		const booljy9cMKj = await PACTvIg0uhr.setupRewards.call(addressiKff8M, {from: accounts[0]});
//		const boolCaj9KNz = await PACTvIg0uhr.setupTeam.call(addressc9R6R54, {from: accounts[4]});

		assert.equal(stringrReA3D, "P2PB2B community token")
		await expect(PACTvIg0uhr.setupRewards.call(addressrlM5ZtN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkJSNCKA = await PACT.new({from: accounts[0]});
		const addresseJmWjyl = accounts[2]
		const uintS7ahs6c = BigInt("1205")
		const addressUQN6aOP = accounts[2]
		const uintoKwP5Ha = BigInt("1994")
		const addressTvnXopM = "0x0000000000000000000000000000000000000001"
		const addressYxKlTPH = accounts[0]
		const uint8uFdeCSI = await PACTkJSNCKA.decimals.call({from: accounts[5]});
//		const boolW2qdsvK = await PACTkJSNCKA.setupFarming.call(addresseJmWjyl, {from: accounts[1]});
//		const boolGhyKzQv = await PACTkJSNCKA.approve.call(addressUQN6aOP, uintS7ahs6c, {from: accounts[1]});
//		const boolRDpbAB = await PACTkJSNCKA.transferFrom.call(addressYxKlTPH, addressTvnXopM, uintoKwP5Ha, {from: accounts[4]});

		assert.equal(uint8uFdeCSI, BigInt("18"))
		await expect(PACTkJSNCKA.setupFarming.call(addresseJmWjyl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDO64Ew = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGRCFP13 = accounts[2]
		const addressTrKO9lm = accounts[1]
		const uintSi9YnzH = await PACTDO64Ew.totalSupply.call({from: accounts[2]});
		const boolNzMfFl8 = await PACTDO64Ew.setupReserve.call(addressGRCFP13, {from: accounts[2]});
		const boolJQuJusY = await PACTDO64Ew.setupBasePool.call(addressTrKO9lm, {from: accounts[5]});
	});

	it('test for PACT', async () => {
		const PACTkdXFsER = await PACT.new({from: accounts[4]});
		const uintQJ6kfNT = BigInt("1424")
		const addressnw3oqHK = accounts[5]
		const addressIwewnPm = accounts[0]
		const addressMJ1XoaZ = accounts[4]
		const stringcC0vD12 = await PACTkdXFsER.name.call({from: accounts[0]});
//		const boolAP4zqHy = await PACTkdXFsER.burn.call(addressnw3oqHK, uintQJ6kfNT, {from: accounts[0]});
//		const boolFuXvEjI = await PACTkdXFsER.setupFarming.call(addressIwewnPm, {from: accounts[0]});
//		const stringcWYTWgK = await PACTkdXFsER.name.call({from: accounts[4]});
//		const boolUCMcVpi = await PACTkdXFsER.setupReserve.call(addressMJ1XoaZ, {from: accounts[4]});

		assert.equal(stringcC0vD12, "P2PB2B community token")
		await expect(PACTkdXFsER.burn.call(addressnw3oqHK, uintQJ6kfNT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTMAZbrlu = await PACT.new({from: accounts[1]});
		const uintN5ecsO8 = BigInt("1212")
		const addressBHPkPO = "0x00000000000000000000000000000000000000-1"
		const addressR2jD8E = accounts[2]
//		const boolKJ9yEz = await PACTMAZbrlu.transferFrom.call(addressR2jD8E, addressBHPkPO, uintN5ecsO8, {from: accounts[0]});

		await expect(PACTMAZbrlu.transferFrom.call(addressR2jD8E, addressBHPkPO, uintN5ecsO8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})