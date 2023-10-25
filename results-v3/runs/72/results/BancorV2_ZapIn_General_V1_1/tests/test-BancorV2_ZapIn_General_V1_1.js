const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQeeMgY8 = BigInt("1325")
		const BancorV2_ZapIn_General_V1_1sjswyhR = await BancorV2_ZapIn_General_V1_1.new(uintQeeMgY8, {from: accounts[0]});
		const byteN5K88Io = "0x15041010061814070e1b041b091c0917120912111f141c1e"
		const addressZOznEcY = "0x0000000000000000000000000000000000000001"
		const addressEuobEm7 = accounts[2]
		const uintXOhCCj = BigInt("1042")
		const uintOMfokNv = BigInt("519")
		const addressEnUwrTV = accounts[4]
		const addressLVvjW34 = accounts[1]
		const addressk8YpPsG = accounts[1]
		const bytexFCdWJ = "0x0d0806001f"
		const addressOBqbzhy = "0x0000000000000000000000000000000000000001"
		const addressTOEIUvF = accounts[1]
		const uintNdbqLTS = BigInt("9")
		const uintRmsPFE = BigInt("246")
		const addresscgtpzZ = accounts[2]
		const addressZarypGv = accounts[3]
		const addressaRXsCW = accounts[5]
		const addressN7FbYWu = accounts[3]
		await BancorV2_ZapIn_General_V1_1sjswyhR.stopInEmergency.call({from: accounts[4]});
		const uint256vRWsY7J = await BancorV2_ZapIn_General_V1_1sjswyhR.ZapInSingleSided.call(addressk8YpPsG, addressLVvjW34, addressEnUwrTV, uintOMfokNv, uintXOhCCj, addressEuobEm7, addressZOznEcY, byteN5K88Io, {from: accounts[4]});
		const uint256FjITDvj = await BancorV2_ZapIn_General_V1_1sjswyhR.ZapInSingleSided.call(addressaRXsCW, addressZarypGv, addresscgtpzZ, uintRmsPFE, uintNdbqLTS, addressTOEIUvF, addressOBqbzhy, bytexFCdWJ, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1sjswyhR.withdraw.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1sjswyhR.nonReentrant.call({from: accounts[1]});
		const addressBqM4zas = await BancorV2_ZapIn_General_V1_1sjswyhR.transferOwnership.call(addressN7FbYWu, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1sjswyhR.stopInEmergency.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintA3x1UTW = BigInt("1847")
		const BancorV2_ZapIn_General_V1_1HVc5Rca = await BancorV2_ZapIn_General_V1_1.new(uintA3x1UTW, {from: accounts[1]});
		const addressuReWXQh = accounts[3]
		const addressqKiULvC = await BancorV2_ZapIn_General_V1_1HVc5Rca.owner.call({from: accounts[1]});
		const addressERCfF5 = await BancorV2_ZapIn_General_V1_1HVc5Rca.toPayable.call(addressuReWXQh, {from: accounts[1]});
		const boollnxJ1mT = await BancorV2_ZapIn_General_V1_1HVc5Rca.isOwner.call({from: accounts[4]});

		assert.equal(addressqKiULvC, 0xB9D4C443F25b35A500Be8E2cfB31414895FCFE20)
		await expect(BancorV2_ZapIn_General_V1_1HVc5Rca.toPayable.call(addressuReWXQh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSwQLfEF = BigInt("1835")
		const BancorV2_ZapIn_General_V1_1nTacAHk = await BancorV2_ZapIn_General_V1_1.new(uintSwQLfEF, {from: accounts[2]});
		const byteFlH4FlH = "0x1c0f"
		const addressnB3bkWx = accounts[2]
		const addressPC57ie2 = accounts[5]
		const uinttqjc9X = BigInt("572")
		const uintrQRxhtQ = BigInt("1531")
		const addresspmmUCA5 = accounts[1]
		const addressHcIWR9u = accounts[3]
		const addressUveKb8l = accounts[4]
		const uint256f1lOy7u = await BancorV2_ZapIn_General_V1_1nTacAHk.ZapInSingleSided.call(addressUveKb8l, addressHcIWR9u, addresspmmUCA5, uintrQRxhtQ, uinttqjc9X, addressPC57ie2, addressnB3bkWx, byteFlH4FlH, {from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1nTacAHk.withdraw.call({from: accounts[1]});
		const boolpHUfday = await BancorV2_ZapIn_General_V1_1nTacAHk.isOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1nTacAHk.ZapInSingleSided.call(addressUveKb8l, addressHcIWR9u, addresspmmUCA5, uintrQRxhtQ, uinttqjc9X, addressPC57ie2, addressnB3bkWx, byteFlH4FlH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxol6FHf = BigInt("1892")
		const BancorV2_ZapIn_General_V1_1k9YifS8 = await BancorV2_ZapIn_General_V1_1.new(uintxol6FHf, {from: accounts[4]});
		const addressp8oKMYk = accounts[2]
		const uintkfoNS9t = BigInt("1337")
		const addressGjp3xKx = accounts[4]
		const addresslHPbZoO = await BancorV2_ZapIn_General_V1_1k9YifS8.transferOwnership.call(addressp8oKMYk, {from: accounts[0]});
		const uint16xUxqC7R = await BancorV2_ZapIn_General_V1_1k9YifS8.set_new_goodwill.call(uintkfoNS9t, {from: accounts[5]});
		const addresswgwD2Ez = await BancorV2_ZapIn_General_V1_1k9YifS8.inCaseTokengetsStuck.call(addressGjp3xKx, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1k9YifS8.nonReentrant.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1k9YifS8.transferOwnership.call(addressp8oKMYk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWUXwWYK = BigInt("1847")
		const BancorV2_ZapIn_General_V1_1HVc5Rca = await BancorV2_ZapIn_General_V1_1.new(uintWUXwWYK, {from: accounts[1]});
		const addressl15EzaY = accounts[2]
		const bytebOhpDXc = "0x12001c090b10031e19101c150b13010502060714181a0e0c1b0c12"
		const addressD6MaoD1 = accounts[5]
		const addressBVoLddS = accounts[5]
		const uintnLuaS1L = BigInt("1918")
		const uintmgMxZ7n = BigInt("1503")
		const addressesceoWA = accounts[0]
		const addressXZisOy2 = accounts[4]
		const addressrmcF8wN = accounts[4]
		const addressiuXGJFa = await BancorV2_ZapIn_General_V1_1HVc5Rca.inCaseTokengetsStuck.call(addressl15EzaY, {from: accounts[1]});
		const addressqKiULvC = await BancorV2_ZapIn_General_V1_1HVc5Rca.owner.call({from: accounts[1]});
		const uint256lwDOtib = await BancorV2_ZapIn_General_V1_1HVc5Rca.ZapInSingleSided.call(addressrmcF8wN, addressXZisOy2, addressesceoWA, uintmgMxZ7n, uintnLuaS1L, addressBVoLddS, addressD6MaoD1, bytebOhpDXc, {from: accounts[4]});
		const boollnxJ1mT = await BancorV2_ZapIn_General_V1_1HVc5Rca.isOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1HVc5Rca.inCaseTokengetsStuck.call(addressl15EzaY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinttz6h109 = BigInt("1835")
		const BancorV2_ZapIn_General_V1_1nTacAHk = await BancorV2_ZapIn_General_V1_1.new(uinttz6h109, {from: accounts[2]});
		const addresswR7WfUI = accounts[3]
		const bytev9H71eu = "0x1c0f"
		const addressmLQr5UX = accounts[2]
		const addressGdvvq4 = accounts[5]
		const uinti1184H8 = BigInt("572")
		const uintp8Y58V = BigInt("1531")
		const addressgztogMB = accounts[1]
		const addressUsDlxwa = accounts[3]
		const addressU4yOBXF = accounts[4]
		const addressPTETE3x = await BancorV2_ZapIn_General_V1_1nTacAHk.transferOwnership.call(addresswR7WfUI, {from: accounts[2]});
		const uint256f1lOy7u = await BancorV2_ZapIn_General_V1_1nTacAHk.ZapInSingleSided.call(addressU4yOBXF, addressUsDlxwa, addressgztogMB, uintp8Y58V, uinti1184H8, addressGdvvq4, addressmLQr5UX, bytev9H71eu, {from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1nTacAHk.nonReentrant.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1nTacAHk.nonReentrant.call({from: accounts[2]});
		const boolpHUfday = await BancorV2_ZapIn_General_V1_1nTacAHk.isOwner.call({from: accounts[4]});
		const addressc2b0n6w = await BancorV2_ZapIn_General_V1_1nTacAHk.owner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1nTacAHk.ZapInSingleSided.call(addressU4yOBXF, addressUsDlxwa, addressgztogMB, uintp8Y58V, uinti1184H8, addressGdvvq4, addressmLQr5UX, bytev9H71eu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint0mNlfD = BigInt("344")
		const BancorV2_ZapIn_General_V1_1SXmWld4 = await BancorV2_ZapIn_General_V1_1.new(uint0mNlfD, {from: accounts[1]});
		const uintGSLcUgI = BigInt("30")
		const uint16zzst22D = await BancorV2_ZapIn_General_V1_1SXmWld4.set_new_goodwill.call(uintGSLcUgI, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1SXmWld4.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1SXmWld4.withdraw.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1SXmWld4.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintpUjWqQP = BigInt("1835")
		const BancorV2_ZapIn_General_V1_1nTacAHk = await BancorV2_ZapIn_General_V1_1.new(uintpUjWqQP, {from: accounts[2]});
		const byteilAA94Z = "0x1c0f"
		const addressQPwVK6Q = accounts[2]
		const addressnMnwrmK = accounts[5]
		const uintzzDxZIO = BigInt("572")
		const uintyGIfgS = BigInt("1531")
		const addressEGhgaQ0 = accounts[1]
		const addressfl9CVQw = accounts[3]
		const addressLYLMxi3 = accounts[4]
		await BancorV2_ZapIn_General_V1_1nTacAHk.toggleContractActive.call({from: accounts[2]});
		const uint256f1lOy7u = await BancorV2_ZapIn_General_V1_1nTacAHk.ZapInSingleSided.call(addressLYLMxi3, addressfl9CVQw, addressEGhgaQ0, uintyGIfgS, uintzzDxZIO, addressnMnwrmK, addressQPwVK6Q, byteilAA94Z, {from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1nTacAHk.nonReentrant.call({from: accounts[3]});
		const addressc2b0n6w = await BancorV2_ZapIn_General_V1_1nTacAHk.owner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1nTacAHk.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYcpv1db = BigInt("1835")
		const BancorV2_ZapIn_General_V1_1nTacAHk = await BancorV2_ZapIn_General_V1_1.new(uintYcpv1db, {from: accounts[2]});
		const boolpHUfday = await BancorV2_ZapIn_General_V1_1nTacAHk.isOwner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1nTacAHk.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolpHUfday, false)
		await expect(BancorV2_ZapIn_General_V1_1nTacAHk.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintcnDu97r = BigInt("802")
		const BancorV2_ZapIn_General_V1_1kVuVNb = await BancorV2_ZapIn_General_V1_1.new(uintcnDu97r, {from: "0x0000000000000000000000000000000000000001"});
		const addressVEUnVH = await BancorV2_ZapIn_General_V1_1kVuVNb.owner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1kVuVNb.renounceOwnership.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1kVuVNb.nonReentrant.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1kVuVNb.stopInEmergency.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1kVuVNb.toggleContractActive.call({from: accounts[2]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintpQeCYMV = BigInt("1117")
		const BancorV2_ZapIn_General_V1_1RHQSLt = await BancorV2_ZapIn_General_V1_1.new(uintpQeCYMV, {from: accounts[2]});
		const addresszHuQhgT = accounts[1]
		await BancorV2_ZapIn_General_V1_1RHQSLt.withdraw.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1RHQSLt.onlyOwner.call({from: accounts[0]});
		const addressP9Npqcs = await BancorV2_ZapIn_General_V1_1RHQSLt.toPayable.call(addresszHuQhgT, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1RHQSLt.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1RHQSLt.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})