const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZhbbEDa = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintnZxAHQU = BigInt("1676")
		const addressZ9acGD7 = accounts[3]
		const addressetlyPAP = accounts[3]
//		const boolrOJT7uE = await CryptoSecureBankTokenZhbbEDa.redeem.call(uintnZxAHQU, {from: accounts[2]});
//		const addressJcbJFAm = await CryptoSecureBankTokenZhbbEDa.setOwner2.call(addressZ9acGD7, {from: "0x0000000000000000000000000000000000000001"});
//		const addressutoc96I = await CryptoSecureBankTokenZhbbEDa.transferOwnership.call(addressetlyPAP, {from: accounts[2]});

		await expect(CryptoSecureBankTokenZhbbEDa.redeem.call(uintnZxAHQU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLlyUh6I = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressP5Ikq02 = accounts[5]
		const addressGdtXQwz = accounts[1]
		const addressIbuQkHV = accounts[5]
		const uinttVUYKG8 = await CryptoSecureBankTokenLlyUh6I.allowance.call(addressGdtXQwz, addressP5Ikq02, {from: accounts[1]});
//		const addressMY3CfY6 = await CryptoSecureBankTokenLlyUh6I.setOwner2.call(addressIbuQkHV, {from: accounts[3]});

		assert.equal(uinttVUYKG8, BigInt("0"))
		await expect(CryptoSecureBankTokenLlyUh6I.setOwner2.call(addressIbuQkHV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyxj6vE = await CryptoSecureBankToken.new({from: accounts[5]});
		const uinteOmmbuf = BigInt("296")
		const addressrHxmEOk = accounts[1]
		const uintwG6GSnK = BigInt("625")
		const addressZP1KKwe = accounts[1]
		const uintRVZo8V0 = BigInt("858")
		const addressuHV0XNR = accounts[3]
		const uintjFMef2M = BigInt("324")
		const addressAUAaVuS = accounts[3]
		const addressFSvJPLL = accounts[3]
//		const boolDOsI69T = await CryptoSecureBankTokenyxj6vE.transfer.call(addressrHxmEOk, uinteOmmbuf, {from: accounts[2]});
//		const boolZJgVGyQ = await CryptoSecureBankTokenyxj6vE.transfer.call(addressZP1KKwe, uintwG6GSnK, {from: accounts[0]});
//		const bools3bQWwM = await CryptoSecureBankTokenyxj6vE.redeem.call(uintRVZo8V0, {from: accounts[0]});
//		const addressVZlRoW8 = await CryptoSecureBankTokenyxj6vE.transferOwnership.call(addressuHV0XNR, {from: accounts[1]});
//		const boolfeZA4xl = await CryptoSecureBankTokenyxj6vE.transfer.call(addressAUAaVuS, uintjFMef2M, {from: accounts[1]});
//		const uintUVMmSIE = await CryptoSecureBankTokenyxj6vE.balanceOf.call(addressFSvJPLL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenyxj6vE.transfer.call(addressrHxmEOk, uinteOmmbuf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRBVIZUH = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintyIP66iq = BigInt("289")
		const addressqFb0yzo = accounts[4]
		const addresseyaBnnI = accounts[1]
		const addressuwe1kjn = await CryptoSecureBankTokenRBVIZUH.getOwner.call({from: accounts[1]});
//		const boolM4ru1pX = await CryptoSecureBankTokenRBVIZUH.transfer.call(addressqFb0yzo, uintyIP66iq, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYiAL0Uj = await CryptoSecureBankTokenRBVIZUH.setOwner2.call(addresseyaBnnI, {from: accounts[5]});
//		await CryptoSecureBankTokenRBVIZUH.whenNotPaused.call({from: accounts[0]});

		assert.equal(addressuwe1kjn, 0x5a15a75E40c92b65834a41D541cBC3f246d0e931)
		await expect(CryptoSecureBankTokenRBVIZUH.transfer.call(addressqFb0yzo, uintyIP66iq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennOWkLW = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintb5a7QeP = BigInt("240")
		const addressmYzDZFT = accounts[4]
		const uintmnCrDe = BigInt("1523")
		const addressI4BkjND = "0x0000000000000000000000000000000000000001"
		const addressmikJVoM = accounts[1]
//		await CryptoSecureBankTokennOWkLW.whenNotPaused.call({from: accounts[4]});
//		const boolzTqz9O = await CryptoSecureBankTokennOWkLW.transfer.call(addressmYzDZFT, uintb5a7QeP, {from: accounts[3]});
//		const boolY1s26zE = await CryptoSecureBankTokennOWkLW.transferFrom.call(addressmikJVoM, addressI4BkjND, uintmnCrDe, {from: accounts[0]});
//		const uintDrRvpLS = await CryptoSecureBankTokennOWkLW.totalSupply.call({from: accounts[0]});

		await expect(CryptoSecureBankTokennOWkLW.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLlyUh6I = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressDYAZX3t = accounts[5]
		const addressm5Wmrw3 = accounts[2]
		const addressBG97uLa = accounts[5]
		const uintfM1DU4y = await CryptoSecureBankTokenLlyUh6I.totalSupply.call({from: accounts[0]});
		const uinttVUYKG8 = await CryptoSecureBankTokenLlyUh6I.allowance.call(addressm5Wmrw3, addressDYAZX3t, {from: accounts[1]});
//		await CryptoSecureBankTokenLlyUh6I.whenPaused.call({from: accounts[1]});
//		const addressMY3CfY6 = await CryptoSecureBankTokenLlyUh6I.setOwner2.call(addressBG97uLa, {from: accounts[3]});

		assert.equal(uintfM1DU4y, BigInt("100000000000000000000000000"))
		assert.equal(uinttVUYKG8, BigInt("0"))
		await expect(CryptoSecureBankTokenLlyUh6I.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenSWIZfmB = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintHZOY9V3 = BigInt("2011")
		const addressgtyEcmg = accounts[2]
		const address6llMl4 = accounts[3]
		const uintk7RNCUU = BigInt("464")
		const addressW25MQxr = accounts[2]
		const uintq9J2S4z = BigInt("1985")
		const addresscfoDFRb = accounts[0]
		const addressKA2RUkY = accounts[0]
		const address3u6YDq = accounts[4]
//		const boolKH4Zg98 = await CryptoSecureBankTokenSWIZfmB.transferFrom.call(address6llMl4, addressgtyEcmg, uintHZOY9V3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJ17CKV = await CryptoSecureBankTokenSWIZfmB.transfer.call(addressW25MQxr, uintk7RNCUU, {from: accounts[5]});
//		const uintfm5H9N3 = await CryptoSecureBankTokenSWIZfmB.onlyPayloadSize.call(uintq9J2S4z, {from: accounts[4]});
//		const uintDlODbuS = await CryptoSecureBankTokenSWIZfmB.balanceOf.call(addresscfoDFRb, {from: accounts[0]});
//		const uintaXca5SO = await CryptoSecureBankTokenSWIZfmB.allowance.call(address3u6YDq, addressKA2RUkY, {from: accounts[2]});

		await expect(CryptoSecureBankTokenSWIZfmB.transferFrom.call(address6llMl4, addressgtyEcmg, uintHZOY9V3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenR3rKqtf = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintyUAYq6s = BigInt("1396")
		const addressyTx6AKn = "0x0000000000000000000000000000000000000001"
		const addressfWbiAPY = accounts[5]
		const addressamYvpXZ = accounts[4]
		const boolOipzkNm = await CryptoSecureBankTokenR3rKqtf.approve.call(addressyTx6AKn, uintyUAYq6s, {from: accounts[1]});
//		const boolf3zoGFu = await CryptoSecureBankTokenR3rKqtf.deprecate.call(addressfWbiAPY, {from: accounts[5]});
//		await CryptoSecureBankTokenR3rKqtf.unpause.call({from: accounts[2]});
//		await CryptoSecureBankTokenR3rKqtf.unpause.call({from: accounts[4]});
//		const addressSYOxYwj = await CryptoSecureBankTokenR3rKqtf.addBlackList.call(addressamYvpXZ, {from: accounts[3]});

		assert.equal(boolOipzkNm, true)
		await expect(CryptoSecureBankTokenR3rKqtf.deprecate.call(addressfWbiAPY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRBVIZUH = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresshXLysoX = accounts[1]
		const addressGtcqUhV = "0x0000000000000000000000000000000000000001"
		const uintrFacKHl = BigInt("289")
		const addressUjo01La = accounts[4]
		const addressTvhopZC = accounts[0]
//		const addressr551Gx = await CryptoSecureBankTokenRBVIZUH.transferOwnership.call(addresshXLysoX, {from: accounts[4]});
//		const addressTzyPmP3 = await CryptoSecureBankTokenRBVIZUH.destroyBlackFunds.call(addressGtcqUhV, {from: accounts[2]});
//		const addressuwe1kjn = await CryptoSecureBankTokenRBVIZUH.getOwner.call({from: accounts[1]});
//		const boolM4ru1pX = await CryptoSecureBankTokenRBVIZUH.transfer.call(addressUjo01La, uintrFacKHl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintjwIl1Q = await CryptoSecureBankTokenRBVIZUH.balanceOf.call(addressTvhopZC, {from: accounts[3]});
//		await CryptoSecureBankTokenRBVIZUH.whenNotPaused.call({from: accounts[0]});

		await expect(CryptoSecureBankTokenRBVIZUH.transferOwnership.call(addresshXLysoX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenmeiMX3a = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresswZw7C6 = accounts[2]
		const addressqVcN8Iu = accounts[5]
		const uintAeJ6AJG = BigInt("1676")
		const boolf3uj12b = await CryptoSecureBankTokenmeiMX3a.getBlackListStatus.call(addresswZw7C6, {from: accounts[3]});
//		const boolTUa5bZm = await CryptoSecureBankTokenmeiMX3a.deprecate.call(addressqVcN8Iu, {from: accounts[3]});
//		const uintfUKM5V5 = await CryptoSecureBankTokenmeiMX3a.onlyPayloadSize.call(uintAeJ6AJG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf3uj12b, false)
		await expect(CryptoSecureBankTokenmeiMX3a.deprecate.call(addressqVcN8Iu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzQ2poc2 = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintfY70UNm = BigInt("1205")
		const addressAyNs2VH = accounts[4]
		const uintKYJGpg8 = BigInt("1867")
		const addressZoUl1H6 = accounts[4]
		const boolQhQd2L7 = await CryptoSecureBankTokenzQ2poc2.redeem.call(uintfY70UNm, {from: accounts[2]});
//		await CryptoSecureBankTokenzQ2poc2.unpause.call({from: accounts[0]});
//		const addresspgVeS1q = await CryptoSecureBankTokenzQ2poc2.setOwner2.call(addressAyNs2VH, {from: accounts[3]});
//		const boolhhf1uX8 = await CryptoSecureBankTokenzQ2poc2.transfer.call(addressZoUl1H6, uintKYJGpg8, {from: accounts[1]});
//		await CryptoSecureBankTokenzQ2poc2.whenPaused.call({from: accounts[5]});
//		await CryptoSecureBankTokenzQ2poc2.pause.call({from: accounts[0]});

		assert.equal(boolQhQd2L7, true)
		await expect(CryptoSecureBankTokenzQ2poc2.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMIQRUPP = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressNBr1HZ = accounts[1]
		const uintzFyfmH = BigInt("1148")
		const addressFSTQcV2 = accounts[1]
		const addressVv8mQs9 = await CryptoSecureBankTokenMIQRUPP.setOwner2.call(addressNBr1HZ, {from: accounts[3]});
//		const uintKxjSRI8 = await CryptoSecureBankTokenMIQRUPP.onlyPayloadSize.call(uintzFyfmH, {from: accounts[0]});
//		await CryptoSecureBankTokenMIQRUPP.whenNotPaused.call({from: accounts[4]});
//		const addressP5p4dQM = await CryptoSecureBankTokenMIQRUPP.setOwner2.call(addressFSTQcV2, {from: accounts[1]});

		await expect(CryptoSecureBankTokenMIQRUPP.onlyPayloadSize.call(uintzFyfmH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenSWIZfmB = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressRwsfCgH = accounts[0]
		const uintvbg8EaU = BigInt("456")
		const addressJbjLVDQ = accounts[2]
		const addressZz4uIm = accounts[0]
		const address3LehJ2 = accounts[0]
		const addressOrOHAy8 = accounts[4]
		const uintLGiVgrO = await CryptoSecureBankTokenSWIZfmB.balanceOf.call(addressRwsfCgH, {from: accounts[1]});
//		const boolJ17CKV = await CryptoSecureBankTokenSWIZfmB.transfer.call(addressJbjLVDQ, uintvbg8EaU, {from: accounts[5]});
//		const uintDlODbuS = await CryptoSecureBankTokenSWIZfmB.balanceOf.call(addressZz4uIm, {from: accounts[0]});
//		const uintaXca5SO = await CryptoSecureBankTokenSWIZfmB.allowance.call(addressOrOHAy8, address3LehJ2, {from: accounts[2]});

		assert.equal(uintLGiVgrO, BigInt("0"))
		await expect(CryptoSecureBankTokenSWIZfmB.transfer.call(addressJbjLVDQ, uintvbg8EaU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMstF9Q = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxlQsK6O = accounts[2]
		const address1KkhYh = accounts[3]
		const addressjOOlhiv = accounts[2]
		const uintvCiCUHd = BigInt("239")
		const addressUUAa50D = accounts[0]
		const uintJ4vtLXg = await CryptoSecureBankTokenMstF9Q.allowance.call(address1KkhYh, addressxlQsK6O, {from: accounts[2]});
		const addresssY8QUIV = await CryptoSecureBankTokenMstF9Q.destroyBlackFunds.call(addressjOOlhiv, {from: accounts[3]});
		await CryptoSecureBankTokenMstF9Q.pause.call({from: accounts[4]});
		await CryptoSecureBankTokenMstF9Q.whenNotPaused.call({from: accounts[1]});
		const boolKGRM1Dw = await CryptoSecureBankTokenMstF9Q.transfer.call(addressUUAa50D, uintvCiCUHd, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLlyUh6I = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressG4xdwrT = accounts[6]
		const addressuJoGIim = accounts[2]
		const uintWPkBFGJ = BigInt("688")
		const addresscfLzGQB = accounts[3]
		const addressoozuKG2 = accounts[0]
		const addressAOiZ7ef = accounts[0]
		const addressYKhftcK = accounts[4]
		const uintAtsrrlz = BigInt("1683")
		const addressEL6RX0n = accounts[4]
		const addressvRxHi5v = "0x0000000000000000000000000000000000000000"
		const uinttVUYKG8 = await CryptoSecureBankTokenLlyUh6I.allowance.call(addressuJoGIim, addressG4xdwrT, {from: accounts[1]});
		const boolULkZvhl = await CryptoSecureBankTokenLlyUh6I.approve.call(addresscfLzGQB, uintWPkBFGJ, {from: accounts[4]});
		const uintm3MUl1o = await CryptoSecureBankTokenLlyUh6I.allowance.call(addressAOiZ7ef, addressoozuKG2, {from: accounts[2]});
		const boolcBx1nBo = await CryptoSecureBankTokenLlyUh6I.deprecate.call(addressYKhftcK, {from: accounts[2]});
//		const boolMnPH06a = await CryptoSecureBankTokenLlyUh6I.transferFrom.call(addressvRxHi5v, addressEL6RX0n, uintAtsrrlz, {from: accounts[0]});

		assert.equal(boolULkZvhl, true)
		assert.equal(boolcBx1nBo, true)
		assert.equal(uintm3MUl1o, BigInt("0"))
		assert.equal(uinttVUYKG8, BigInt("0"))
		await expect(CryptoSecureBankTokenLlyUh6I.transferFrom.call(addressvRxHi5v, addressEL6RX0n, uintAtsrrlz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRBVIZUH = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintJmy5hKk = BigInt("282")
		const addressTTwtz9 = accounts[1]
		const uintT38w7DJ = BigInt("246")
		const addressj1UriNE = accounts[4]
		const addressoYMjK7V = accounts[3]
		const addressuwe1kjn = await CryptoSecureBankTokenRBVIZUH.getOwner.call({from: accounts[1]});
		const boolfyZAgII = await CryptoSecureBankTokenRBVIZUH.transfer.call(addressTTwtz9, uintJmy5hKk, {from: accounts[3]});
//		const boolM4ru1pX = await CryptoSecureBankTokenRBVIZUH.transfer.call(addressj1UriNE, uintT38w7DJ, {from: "0x0000000000000000000000000000000000000001"});
//		const boold5wacBV = await CryptoSecureBankTokenRBVIZUH.getBlackListStatus.call(addressoYMjK7V, {from: accounts[4]});

		assert.equal(addressuwe1kjn, 0x5a15a75E40c92b65834a41D541cBC3f246d0e931)
		assert.equal(boolfyZAgII, true)
		await expect(CryptoSecureBankTokenRBVIZUH.transfer.call(addressj1UriNE, uintT38w7DJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLlyUh6I = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresse2Z5VD8 = accounts[7]
		const addressssGSc7m = accounts[1]
		const addressuouaEde = accounts[2]
		const addressdHvcjQI = accounts[5]
		const uintGots6lA = BigInt("709")
		const addressTlioFfM = accounts[3]
		const uinttVUYKG8 = await CryptoSecureBankTokenLlyUh6I.allowance.call(addressssGSc7m, addresse2Z5VD8, {from: accounts[1]});
		const uintB9A8eoD = await CryptoSecureBankTokenLlyUh6I.balanceOf.call(addressuouaEde, {from: accounts[2]});
//		const addressqSycyHf = await CryptoSecureBankTokenLlyUh6I.destroyBlackFunds.call(addressdHvcjQI, {from: accounts[2]});
//		const boolULkZvhl = await CryptoSecureBankTokenLlyUh6I.approve.call(addressTlioFfM, uintGots6lA, {from: accounts[4]});

		assert.equal(uintB9A8eoD, BigInt("100000000000000000000000000"))
		assert.equal(uinttVUYKG8, BigInt("0"))
		await expect(CryptoSecureBankTokenLlyUh6I.destroyBlackFunds.call(addressdHvcjQI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenl71hOqV = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressVzMIHAq = accounts[0]
		const addressuDtmLG = accounts[0]
		const uintV1hE2tc = BigInt("535")
		const addressC3fRFYS = accounts[3]
		const addressIZpobqU = await CryptoSecureBankTokenl71hOqV.transferOwnership.call(addressVzMIHAq, {from: accounts[2]});
		const address7rNiY0 = await CryptoSecureBankTokenl71hOqV.getOwner.call({from: accounts[3]});
//		await CryptoSecureBankTokenl71hOqV.whenPaused.call({from: accounts[0]});
//		const addressa3bA2Y8 = await CryptoSecureBankTokenl71hOqV.removeBlackList.call(addressuDtmLG, {from: accounts[5]});
//		const booluoN0ALP = await CryptoSecureBankTokenl71hOqV.transfer.call(addressC3fRFYS, uintV1hE2tc, {from: accounts[2]});

		assert.equal(address7rNiY0, 0x2E83eFFBdEBA4F355c5F6FdbB156Fa9b96D62A32)
		await expect(CryptoSecureBankTokenl71hOqV.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLlyUh6I = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintka8Muc = BigInt("1638")
		const uintdwt8tKa = BigInt("1757")
		const uintGHyd71x = BigInt("662")
		const addressELypLYB = accounts[3]
//		const uintj1o5eoy = await CryptoSecureBankTokenLlyUh6I.setParams.call(uintdwt8tKa, uintka8Muc, {from: accounts[2]});
//		const boolULkZvhl = await CryptoSecureBankTokenLlyUh6I.approve.call(addressELypLYB, uintGHyd71x, {from: accounts[4]});

		await expect(CryptoSecureBankTokenLlyUh6I.setParams.call(uintdwt8tKa, uintka8Muc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLlyUh6I = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintMiI4dtm = BigInt("1683")
		const addressZn4yJcR = accounts[5]
		const addressixaP5zE = "0x0000000000000000000000000000000000000001"
//		await CryptoSecureBankTokenLlyUh6I.pause.call({from: accounts[2]});
//		const boolMnPH06a = await CryptoSecureBankTokenLlyUh6I.transferFrom.call(addressixaP5zE, addressZn4yJcR, uintMiI4dtm, {from: accounts[0]});
//		const addressx9Lk0f7 = await CryptoSecureBankTokenLlyUh6I.getOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenLlyUh6I.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRBVIZUH = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintm3yRUt4 = BigInt("1202")
		const addressItgx54 = "0x00000000000000000000000000000000000000-1"
		const uintgyAgivy = BigInt("1186")
		const addressI6bo0hu = accounts[2]
		const uinttc4TiT = BigInt("151")
		const uintZlkLeOS = BigInt("231")
		const addressUbeEO9f = accounts[1]
		const addressdZ7V2N6 = accounts[3]
		const addressoDKhJZ = "0x0000000000000000000000000000000000000001"
//		const boolLsCrciH = await CryptoSecureBankTokenRBVIZUH.approve.call(addressItgx54, uintm3yRUt4, {from: accounts[3]});
//		const boolZFzA5YS = await CryptoSecureBankTokenRBVIZUH.approve.call(addressI6bo0hu, uintgyAgivy, {from: accounts[2]});
//		const bool6hAoKn = await CryptoSecureBankTokenRBVIZUH.redeem.call(uinttc4TiT, {from: accounts[3]});
//		const boolfyZAgII = await CryptoSecureBankTokenRBVIZUH.transfer.call(addressUbeEO9f, uintZlkLeOS, {from: accounts[3]});
//		const uintL14SClj = await CryptoSecureBankTokenRBVIZUH.allowance.call(addressoDKhJZ, addressdZ7V2N6, {from: accounts[2]});

		await expect(CryptoSecureBankTokenRBVIZUH.approve.call(addressItgx54, uintm3yRUt4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRBVIZUH = await CryptoSecureBankToken.new({from: accounts[3]});
		const uinthX0yMP = BigInt("1202")
		const addressbqhNn5W = "0x0000000000000000000000000000000000000000"
		const uintdcynvR = BigInt("1186")
		const addressdrgp100 = accounts[2]
		const uintPI3mHhC = BigInt("151")
		const addressFuU0kKt = accounts[0]
		const addressTv1OXfl = accounts[3]
		const addressn6K3js3 = "0x00000000000000000000000000000000000000-1"
		const addressR4phm59 = accounts[1]
		const uintInjQ9C = BigInt("1385")
		const addresssMKlzF5 = accounts[1]
		const uintJg9lMdi = BigInt("758")
		const addresssJBNh7U = "0x0000000000000000000000000000000000000001"
		const addressGaP4xIk = accounts[2]
		const address5ov772 = accounts[4]
		const addressaWAnXJW = accounts[0]
		const addressoX3o20x = accounts[2]
		const boolLsCrciH = await CryptoSecureBankTokenRBVIZUH.approve.call(addressbqhNn5W, uinthX0yMP, {from: accounts[3]});
		const boolZFzA5YS = await CryptoSecureBankTokenRBVIZUH.approve.call(addressdrgp100, uintdcynvR, {from: accounts[2]});
		const bool6hAoKn = await CryptoSecureBankTokenRBVIZUH.redeem.call(uintPI3mHhC, {from: accounts[3]});
		const booldwabEj = await CryptoSecureBankTokenRBVIZUH.getBlackListStatus.call(addressFuU0kKt, {from: accounts[0]});
//		const uintL14SClj = await CryptoSecureBankTokenRBVIZUH.allowance.call(addressn6K3js3, addressTv1OXfl, {from: accounts[2]});
//		const boold74iXvL = await CryptoSecureBankTokenRBVIZUH.deprecate.call(addressR4phm59, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmq8XSRi = await CryptoSecureBankTokenRBVIZUH.transfer.call(addresssMKlzF5, uintInjQ9C, {from: accounts[3]});
//		const boolSMI2nUJ = await CryptoSecureBankTokenRBVIZUH.transferFrom.call(addressGaP4xIk, addresssJBNh7U, uintJg9lMdi, {from: accounts[2]});
//		const addressROoVkD8 = await CryptoSecureBankTokenRBVIZUH.transferOwnership.call(address5ov772, {from: accounts[4]});
//		const uintJKgA1VU = await CryptoSecureBankTokenRBVIZUH.allowance.call(addressoX3o20x, addressaWAnXJW, {from: accounts[0]});

		assert.equal(bool6hAoKn, true)
		assert.equal(boolLsCrciH, true)
		assert.equal(boolZFzA5YS, true)
		assert.equal(booldwabEj, false)
		await expect(CryptoSecureBankTokenRBVIZUH.allowance.call(addressn6K3js3, addressTv1OXfl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})