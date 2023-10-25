const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintP7aAd0 = BigInt("810")
		const BancorV2_ZapIn_General_V1_1fxnky6q = await BancorV2_ZapIn_General_V1_1.new(uintP7aAd0, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1fxnky6q.stopInEmergency.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1fxnky6q.onlyOwner.call({from: accounts[3]});
//		const boolkzAe9By = await BancorV2_ZapIn_General_V1_1fxnky6q.isOwner.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1fxnky6q.toggleContractActive.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1fxnky6q.renounceOwnership.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1fxnky6q.stopInEmergency.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintMnwNPba = BigInt("959")
		const BancorV2_ZapIn_General_V1_1GzMlo1o = await BancorV2_ZapIn_General_V1_1.new(uintMnwNPba, {from: accounts[0]});
		const addresstzL1rmm = await BancorV2_ZapIn_General_V1_1GzMlo1o.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1GzMlo1o.renounceOwnership.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1GzMlo1o.toggleContractActive.call({from: accounts[2]});

		assert.equal(addresstzL1rmm, 0x1C543C1F428d176990F63a97251a22ad909DC768)
		await expect(BancorV2_ZapIn_General_V1_1GzMlo1o.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintGUIgZoB = BigInt("1885")
		const BancorV2_ZapIn_General_V1_1sP4dN8L = await BancorV2_ZapIn_General_V1_1.new(uintGUIgZoB, {from: accounts[4]});
		const byteBJI0kzJ = "0x030919"
		const addressvy8eU9c = accounts[0]
		const addressMbttc0w = accounts[5]
		const uintc2JOXu4 = BigInt("832")
		const uintermmgKf = BigInt("355")
		const addressz9GiOzv = accounts[0]
		const addressZhNaPEL = accounts[3]
		const addressp12jf0B = accounts[1]
		const addressV5MtNqG = await BancorV2_ZapIn_General_V1_1sP4dN8L.owner.call({from: accounts[3]});
//		const uint256iuQD2aT = await BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addressp12jf0B, addressZhNaPEL, addressz9GiOzv, uintermmgKf, uintc2JOXu4, addressMbttc0w, addressvy8eU9c, byteBJI0kzJ, {from: accounts[2]});

		assert.equal(addressV5MtNqG, 0xD8E1Ff2766ccE6bA3E4f04fe49643804484243EB)
		await expect(BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addressp12jf0B, addressZhNaPEL, addressz9GiOzv, uintermmgKf, uintc2JOXu4, addressMbttc0w, addressvy8eU9c, byteBJI0kzJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintVQGZi1f = BigInt("1740")
		const BancorV2_ZapIn_General_V1_1ZeCY060 = await BancorV2_ZapIn_General_V1_1.new(uintVQGZi1f, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1ZeCY060.onlyOwner.call({from: accounts[5]});
		const boolsuxzG3 = await BancorV2_ZapIn_General_V1_1ZeCY060.isOwner.call({from: accounts[0]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintvPg3W8U = BigInt("427")
		const BancorV2_ZapIn_General_V1_11wMApZ = await BancorV2_ZapIn_General_V1_1.new(uintvPg3W8U, {from: accounts[5]});
		const byte9vXROU = "0x02150b0c0b1d"
		const addresspIjvkJ1 = accounts[1]
		const addresscJLE5ec = accounts[5]
		const uintPS2CsPl = BigInt("484")
		const uintAxcrDbE = BigInt("777")
		const addressXx6JRtQ = accounts[3]
		const addressV6WZmQr = accounts[0]
		const addressVhRII4 = accounts[1]
//		await BancorV2_ZapIn_General_V1_11wMApZ.withdraw.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_11wMApZ.toggleContractActive.call({from: accounts[3]});
//		const uint256Ze95n3I = await BancorV2_ZapIn_General_V1_11wMApZ.ZapInSingleSided.call(addressVhRII4, addressV6WZmQr, addressXx6JRtQ, uintAxcrDbE, uintPS2CsPl, addresscJLE5ec, addresspIjvkJ1, byte9vXROU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_11wMApZ.withdraw.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintRLcx5P5 = BigInt("1885")
		const BancorV2_ZapIn_General_V1_1sP4dN8L = await BancorV2_ZapIn_General_V1_1.new(uintRLcx5P5, {from: accounts[4]});
		const bytedUCapH1 = "0x030919"
		const addresslf6q9zW = accounts[0]
		const addressUiDuYvJ = accounts[5]
		const uintcucoAk = BigInt("832")
		const uintLiTc750 = BigInt("323")
		const addressga8RXJj = accounts[0]
		const addressBU5miDu = accounts[3]
		const addressy7Y2nYv = accounts[1]
//		await BancorV2_ZapIn_General_V1_1sP4dN8L.toggleContractActive.call({from: accounts[4]});
//		const uint256iuQD2aT = await BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addressy7Y2nYv, addressBU5miDu, addressga8RXJj, uintLiTc750, uintcucoAk, addressUiDuYvJ, addresslf6q9zW, bytedUCapH1, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1sP4dN8L.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintsQPfCn = BigInt("1885")
		const BancorV2_ZapIn_General_V1_1sP4dN8L = await BancorV2_ZapIn_General_V1_1.new(uintsQPfCn, {from: accounts[4]});
		const addressyAOJ2i = accounts[0]
		const byteTaJsZkR = "0x030919"
		const addresshDCyHRB = accounts[0]
		const address0JM3qU = accounts[5]
		const uintANbZZjg = BigInt("837")
		const uinthGtnPP = BigInt("355")
		const addressw6Ml3Iu = accounts[0]
		const addressuNhaW0k = accounts[3]
		const addressqRUAXsn = accounts[1]
		const addressj2LvQDw = accounts[2]
//		const addressVooHx4v = await BancorV2_ZapIn_General_V1_1sP4dN8L.inCaseTokengetsStuck.call(addressyAOJ2i, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1sP4dN8L.renounceOwnership.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1sP4dN8L.toggleContractActive.call({from: accounts[4]});
//		const uint256iuQD2aT = await BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addressqRUAXsn, addressuNhaW0k, addressw6Ml3Iu, uinthGtnPP, uintANbZZjg, address0JM3qU, addresshDCyHRB, byteTaJsZkR, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1sP4dN8L.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressiYWyly1 = await BancorV2_ZapIn_General_V1_1sP4dN8L.transferOwnership.call(addressj2LvQDw, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1sP4dN8L.inCaseTokengetsStuck.call(addressyAOJ2i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkrUAU43 = BigInt("1885")
		const BancorV2_ZapIn_General_V1_1sP4dN8L = await BancorV2_ZapIn_General_V1_1.new(uintkrUAU43, {from: accounts[4]});
		const byteltBmra7 = "0x030919"
		const addressOr6Jolp = accounts[0]
		const addressdxJxXwf = accounts[5]
		const uintuWltu5x = BigInt("832")
		const uintPD2EZiC = BigInt("355")
		const addressFly1wwx = accounts[0]
		const addressQ0skFij = accounts[3]
		const address86ulfH = accounts[1]
//		await BancorV2_ZapIn_General_V1_1sP4dN8L.renounceOwnership.call({from: accounts[4]});
//		const addressV5MtNqG = await BancorV2_ZapIn_General_V1_1sP4dN8L.owner.call({from: accounts[3]});
//		const uint256iuQD2aT = await BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(address86ulfH, addressQ0skFij, addressFly1wwx, uintPD2EZiC, uintuWltu5x, addressdxJxXwf, addressOr6Jolp, byteltBmra7, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1sP4dN8L.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintpOY4X3i = BigInt("1885")
		const BancorV2_ZapIn_General_V1_1sP4dN8L = await BancorV2_ZapIn_General_V1_1.new(uintpOY4X3i, {from: accounts[4]});
		const uintjDWOJkh = BigInt("437")
		const bytehAghUch = "0x030919"
		const addressRfxNnu = accounts[0]
		const addresskud51Eg = accounts[5]
		const uintvwBMfdW = BigInt("832")
		const uintQVmKqu = BigInt("355")
		const addressRuQtTCk = accounts[0]
		const addressz9VQcN = accounts[3]
		const addresssfFuUnM = accounts[2]
		const uint16X3KCNh7 = await BancorV2_ZapIn_General_V1_1sP4dN8L.set_new_goodwill.call(uintjDWOJkh, {from: accounts[4]});
		const addressV5MtNqG = await BancorV2_ZapIn_General_V1_1sP4dN8L.owner.call({from: accounts[3]});
//		const uint256iuQD2aT = await BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addresssfFuUnM, addressz9VQcN, addressRuQtTCk, uintQVmKqu, uintvwBMfdW, addresskud51Eg, addressRfxNnu, bytehAghUch, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1sP4dN8L.nonReentrant.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1sP4dN8L.stopInEmergency.call({from: accounts[3]});

		assert.equal(addressV5MtNqG, 0xD8E1Ff2766ccE6bA3E4f04fe49643804484243EB)
		await expect(BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addresssfFuUnM, addressz9VQcN, addressRuQtTCk, uintQVmKqu, uintvwBMfdW, addresskud51Eg, addressRfxNnu, bytehAghUch, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintjAqhSm = BigInt("1885")
		const BancorV2_ZapIn_General_V1_1sP4dN8L = await BancorV2_ZapIn_General_V1_1.new(uintjAqhSm, {from: accounts[4]});
		const addressZAPtyi8 = accounts[5]
		const bytek4QAzE = "0x1f09030f140b08160d1c1d0c071c0c"
		const addressqkpPQCq = accounts[4]
		const addressFKY7rxD = accounts[4]
		const uintNzC7xob = BigInt("1006")
		const uint0VoZzD = BigInt("680")
		const addressqtIdQuB = accounts[2]
		const addressQJoe5d6 = accounts[3]
		const addresspcx5e6V = accounts[1]
		const byteIy9kbnm = "0x030919"
		const addressZCKgG3x = accounts[0]
		const addressXA5Lyrs = accounts[5]
		const uintJxad9KN = BigInt("832")
		const uintCQrD06K = BigInt("355")
		const addressrZw1O9i = accounts[0]
		const addressCptZEj = accounts[3]
		const addressayORmRT = accounts[1]
		const addressFxvY43j = await BancorV2_ZapIn_General_V1_1sP4dN8L.transferOwnership.call(addressZAPtyi8, {from: accounts[4]});
		const addressV5MtNqG = await BancorV2_ZapIn_General_V1_1sP4dN8L.owner.call({from: accounts[3]});
//		const uint256P8hlfZP = await BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addresspcx5e6V, addressQJoe5d6, addressqtIdQuB, uint0VoZzD, uintNzC7xob, addressFKY7rxD, addressqkpPQCq, bytek4QAzE, {from: accounts[4]});
//		const uint256iuQD2aT = await BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addressayORmRT, addressCptZEj, addressrZw1O9i, uintCQrD06K, uintJxad9KN, addressXA5Lyrs, addressZCKgG3x, byteIy9kbnm, {from: accounts[2]});

		assert.equal(addressV5MtNqG, 0xD8E1Ff2766ccE6bA3E4f04fe49643804484243EB)
		await expect(BancorV2_ZapIn_General_V1_1sP4dN8L.ZapInSingleSided.call(addresspcx5e6V, addressQJoe5d6, addressqtIdQuB, uint0VoZzD, uintNzC7xob, addressFKY7rxD, addressqkpPQCq, bytek4QAzE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})