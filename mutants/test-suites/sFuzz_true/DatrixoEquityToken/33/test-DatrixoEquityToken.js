const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressivGkR1l = accounts[1]
		const uintDP6CA95 = BigInt("1236")
		const DatrixoEquityTokenkgTEuAF = await DatrixoEquityToken.new(addressivGkR1l, uintDP6CA95, {from: accounts[0]});
		const uintwcTikVv = BigInt("1538")
		const addressD2AfWog = accounts[1]
		const uintCyYqK9D = BigInt("1415")
		const addresseAtF96s = accounts[0]
		const addressasmGvx5 = accounts[5]
//		await DatrixoEquityTokenkgTEuAF.afterStartTime.call({from: accounts[3]});
//		const boolcoEP5bz = await DatrixoEquityTokenkgTEuAF.transfer.call(addressD2AfWog, uintwcTikVv, {from: accounts[2]});
//		const boolKKsJJfy = await DatrixoEquityTokenkgTEuAF.transferFrom.call(addressasmGvx5, addresseAtF96s, uintCyYqK9D, {from: accounts[1]});

		await expect(DatrixoEquityTokenkgTEuAF.afterStartTime.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressAAK8l9 = accounts[3]
		const uintPxTaFfS = BigInt("30")
		const DatrixoEquityTokenGyGGjYC = await DatrixoEquityToken.new(addressAAK8l9, uintPxTaFfS, {from: accounts[1]});
		const addressxYRixn4 = accounts[2]
		const uintiezQF3S = BigInt("1510")
		const addressNdT0JYB = accounts[4]
//		const boolGC9Khp8 = await DatrixoEquityTokenGyGGjYC.removeShareholder.call(addressxYRixn4, {from: accounts[5]});
//		const addressarrayHyrBfQJ = await DatrixoEquityTokenGyGGjYC.getShareholdersArray.call({from: accounts[2]});
//		const boolJwiZtNa = await DatrixoEquityTokenGyGGjYC.transfer.call(addressNdT0JYB, uintiezQF3S, {from: accounts[1]});

		await expect(DatrixoEquityTokenGyGGjYC.removeShareholder.call(addressxYRixn4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressLSGtKvI = accounts[4]
		const uintvLdWwZE = BigInt("1362")
		const DatrixoEquityTokeno11mpg9 = await DatrixoEquityToken.new(addressLSGtKvI, uintvLdWwZE, {from: "0x0000000000000000000000000000000000000001"});
		const uintDNqBTn6 = BigInt("1168")
		const addressXHFqD7P = accounts[4]
		const addressv5N297s = accounts[2]
		const uintAk1US3a = BigInt("394")
		const addressWysVBhP = accounts[0]
		const addressIdYwQTU = accounts[4]
		const boolbm1eY1z = await DatrixoEquityTokeno11mpg9.transferFrom.call(addressv5N297s, addressXHFqD7P, uintDNqBTn6, {from: "0x0000000000000000000000000000000000000001"});
		const boolJOPzbM3 = await DatrixoEquityTokeno11mpg9.transferFrom.call(addressIdYwQTU, addressWysVBhP, uintAk1US3a, {from: accounts[4]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addresshvluGG6 = accounts[5]
		const uintTkkJDwU = BigInt("1799")
		const DatrixoEquityTokenj2ILv7i = await DatrixoEquityToken.new(addresshvluGG6, uintTkkJDwU, {from: accounts[3]});
		const uintnwwBtim = BigInt("1658")
		const addressgp3rAI = accounts[3]
		const addresst9Vu7B = accounts[2]
		const addressarrayN7GF5mt = await DatrixoEquityTokenj2ILv7i.getShareholdersArray.call({from: accounts[0]});
		const addressarray0YklfZ = await DatrixoEquityTokenj2ILv7i.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolS4hmOaW = await DatrixoEquityTokenj2ILv7i.transfer.call(addressgp3rAI, uintnwwBtim, {from: accounts[3]});
//		const boolM0sJ6T = await DatrixoEquityTokenj2ILv7i.removeShareholder.call(addresst9Vu7B, {from: accounts[5]});

		assert.equal(addressarray0YklfZ, )
		assert.equal(addressarrayN7GF5mt, )
		await expect(DatrixoEquityTokenj2ILv7i.transfer.call(addressgp3rAI, uintnwwBtim, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqSRJtXV = accounts[1]
		const uintKPOdalw = BigInt("1594")
		const DatrixoEquityTokennfWupEl = await DatrixoEquityToken.new(addressqSRJtXV, uintKPOdalw, {from: accounts[2]});
		const uintvHuYqAQ = BigInt("124")
		const addressK1xF4Si = accounts[4]
		const uintl8MQj2 = BigInt("1685")
		const addresshUvc7OB = accounts[3]
		const addressj10otk4 = accounts[0]
		const boolma1M6xY = await DatrixoEquityTokennfWupEl.transfer.call(addressK1xF4Si, uintvHuYqAQ, {from: accounts[1]});
//		await DatrixoEquityTokennfWupEl.afterStartTime.call({from: accounts[0]});
//		const boolRabWWYY = await DatrixoEquityTokennfWupEl.transferFrom.call(addressj10otk4, addresshUvc7OB, uintl8MQj2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolma1M6xY, true)
		await expect(DatrixoEquityTokennfWupEl.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressdwRjxny = accounts[1]
		const uintZgYM0x = BigInt("1594")
		const DatrixoEquityTokennfWupEl = await DatrixoEquityToken.new(addressdwRjxny, uintZgYM0x, {from: accounts[2]});
		const uintiSMftSv = BigInt("103")
		const addressgU2DXvT = accounts[5]
		const addresscYLfuE4 = accounts[2]
		const boolma1M6xY = await DatrixoEquityTokennfWupEl.transfer.call(addressgU2DXvT, uintiSMftSv, {from: accounts[1]});
		const addressarraymczycfR = await DatrixoEquityTokennfWupEl.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolyLBj8bE = await DatrixoEquityTokennfWupEl.removeShareholder.call(addresscYLfuE4, {from: accounts[1]});
//		const addressarrayuHPEwq = await DatrixoEquityTokennfWupEl.getShareholdersArray.call({from: accounts[1]});

		assert.equal(addressarraymczycfR, )
		assert.equal(boolma1M6xY, true)
		await expect(DatrixoEquityTokennfWupEl.removeShareholder.call(addresscYLfuE4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressoXo1MVA = accounts[1]
		const uintsR32Ago = BigInt("1594")
		const DatrixoEquityTokennfWupEl = await DatrixoEquityToken.new(addressoXo1MVA, uintsR32Ago, {from: accounts[2]});
		const uintr1pKhlg = BigInt("103")
		const addresspqXigZ9 = accounts[1]
		const addressarrayJ7NeU70 = await DatrixoEquityTokennfWupEl.getShareholdersArray.call({from: accounts[2]});
//		const boolma1M6xY = await DatrixoEquityTokennfWupEl.transfer.call(addresspqXigZ9, uintr1pKhlg, {from: accounts[1]});

		assert.equal(addressarrayJ7NeU70, )
		await expect(DatrixoEquityTokennfWupEl.transfer.call(addresspqXigZ9, uintr1pKhlg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPAbQyLA = accounts[1]
		const uintDHKnetZ = BigInt("1594")
		const DatrixoEquityTokennfWupEl = await DatrixoEquityToken.new(addressPAbQyLA, uintDHKnetZ, {from: accounts[2]});
		const uintn0hMrst = BigInt("1652")
		const addressSQZyMBT = accounts[1]
		const address2mtULx = accounts[0]
		const uintoYRWwLY = BigInt("1406")
		const addressuzbqNQm = accounts[1]
//		const boolJI2vWuu = await DatrixoEquityTokennfWupEl.transferFrom.call(address2mtULx, addressSQZyMBT, uintn0hMrst, {from: accounts[1]});
//		const boolma1M6xY = await DatrixoEquityTokennfWupEl.transfer.call(addressuzbqNQm, uintoYRWwLY, {from: accounts[1]});

		await expect(DatrixoEquityTokennfWupEl.transferFrom.call(address2mtULx, addressSQZyMBT, uintn0hMrst, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressj0rk4N8 = accounts[1]
		const uintZyVm43E = BigInt("1594")
		const DatrixoEquityTokennfWupEl = await DatrixoEquityToken.new(addressj0rk4N8, uintZyVm43E, {from: accounts[2]});
		const uintSalZf0a = BigInt("184")
		const addressm5LIxxg = accounts[3]
		const uintatbr9d0 = await DatrixoEquityTokennfWupEl.setStart.call(uintSalZf0a, {from: accounts[1]});
//		const boolyLBj8bE = await DatrixoEquityTokennfWupEl.removeShareholder.call(addressm5LIxxg, {from: accounts[1]});
//		const addressarrayuHPEwq = await DatrixoEquityTokennfWupEl.getShareholdersArray.call({from: accounts[1]});

		await expect(DatrixoEquityTokennfWupEl.removeShareholder.call(addressm5LIxxg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressaW3jhaE = accounts[2]
		const uintoUmUdSY = BigInt("318")
		const DatrixoEquityTokenEnasOAC = await DatrixoEquityToken.new(addressaW3jhaE, uintoUmUdSY, {from: accounts[0]});
		const uintjeG3Plz = BigInt("425")
		const addressLFW4tu = accounts[1]
//		const uintDm6Ldp = await DatrixoEquityTokenEnasOAC.setStart.call(uintjeG3Plz, {from: accounts[2]});
//		await DatrixoEquityTokenEnasOAC.afterStartTime.call({from: accounts[5]});
//		const boolvmTrpYi = await DatrixoEquityTokenEnasOAC.removeShareholder.call(addressLFW4tu, {from: accounts[3]});
//		await DatrixoEquityTokenEnasOAC.afterStartTime.call({from: accounts[1]});

		await expect(DatrixoEquityTokenEnasOAC.setStart.call(uintjeG3Plz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressZ0G33mF = accounts[1]
		const uintxjtOVYs = BigInt("1594")
		const DatrixoEquityTokennfWupEl = await DatrixoEquityToken.new(addressZ0G33mF, uintxjtOVYs, {from: accounts[2]});
		const uintibr05dZ = BigInt("2030")
		const addressIs75x59 = accounts[3]
		const addressjJZPWxH = accounts[1]
		const addressjOigFCA = "0x0000000000000000000000000000000000000001"
		const uintryvv0mX = BigInt("75")
		const addresslZCghkh = accounts[1]
		const boolim4ntmQ = await DatrixoEquityTokennfWupEl.transferFrom.call(addressjJZPWxH, addressIs75x59, uintibr05dZ, {from: accounts[1]});
//		const boolCTFFk5s = await DatrixoEquityTokennfWupEl.removeShareholder.call(addressjOigFCA, {from: accounts[0]});
//		const boolma1M6xY = await DatrixoEquityTokennfWupEl.transfer.call(addresslZCghkh, uintryvv0mX, {from: accounts[1]});

		assert.equal(boolim4ntmQ, true)
		await expect(DatrixoEquityTokennfWupEl.removeShareholder.call(addressjOigFCA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})