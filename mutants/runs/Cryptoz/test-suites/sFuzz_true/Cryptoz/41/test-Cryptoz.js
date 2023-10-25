const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozjzCXce2 = await Cryptoz.new({from: accounts[1]});
		const uintjaZv9FQ = BigInt("360")
		const addressrZBOhav = accounts[4]
		await CryptozjzCXce2.getOwnedCard.call(uintjaZv9FQ, {from: accounts[5]});
		await CryptozjzCXce2.getBonusBoosters.call({from: accounts[4]});
		const uint256arrayxi0n3I3 = await CryptozjzCXce2.tokensOfOwner.call(addressrZBOhav, {from: accounts[0]});

		await expect(CryptozjzCXce2.getOwnedCard.call(uintjaZv9FQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTBYEGvz = await Cryptoz.new({from: accounts[3]});
		const uintTSuAnkR = BigInt("2027")
		const uintE3jsup = BigInt("846")
		const uinteRWkaJW = BigInt("1739")
		const uintiftcIps = BigInt("2031")
		const uint2ceYqN = BigInt("1949")
		const uinthLGnLJU = BigInt("162")
		const uintnAl07D = BigInt("253")
		const uintXKRc2sG = BigInt("247")
		const stringgbd4lUg = "d3MKPbk7gNZ8U"
		const stringgxkPwPw = "QzlH9LP2GjDugTffhHm68dGFHowJ2rqORWsnQ21JUkMjcfhKChqWghEfbXIfnpJ8hcahgcYtRGXwTT6x"
		const uintJHKexio = BigInt("73")
		const boolbboQrqd = await CryptozTBYEGvz.buyBoosterCard.call(uintTSuAnkR, {from: accounts[0]});
		const stringXgmkrPf = await CryptozTBYEGvz.tokenURI.call(uintE3jsup, {from: accounts[3]});
		const booluCWwWE = await CryptozTBYEGvz.loadNewCardType.call(uintJHKexio, stringgxkPwPw, stringgbd4lUg, uintXKRc2sG, uintnAl07D, uinthLGnLJU, uint2ceYqN, uintiftcIps, uinteRWkaJW, {from: accounts[2]});

		await expect(CryptozTBYEGvz.buyBoosterCard.call(uintTSuAnkR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz482orZ = await Cryptoz.new({from: accounts[2]});
		const uintheJBJr = BigInt("1981")
		const addressXgyihe4 = accounts[2]
		const uint256Id38gMu = await Cryptoz482orZ.sacrifice.call(uintheJBJr, {from: "0x0000000000000000000000000000000000000001"});
		await Cryptoz482orZ.getBonusBoosters.call({from: accounts[0]});
		await Cryptoz482orZ.getBonusBoosters.call({from: accounts[2]});
		const uintdOWZtck = await Cryptoz482orZ.getTimeToDailyBonus.call(addressXgyihe4, {from: accounts[2]});

		await expect(Cryptoz482orZ.sacrifice.call(uintheJBJr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozVKv3mGy = await Cryptoz.new({from: accounts[0]});
		const uint6eznql = BigInt("59")
		const addressnTaFvtM = accounts[3]
		const uintgoJCZHd = BigInt("1956")
		const uintaH4NAYm = BigInt("480")
		const uint7kSXLC = BigInt("701")
		const addressBSNc8Ok = accounts[2]
		const addressolZhkT4 = accounts[1]
		const uint256N2fKnBS = await CryptozVKv3mGy.tokenOfOwnerByIndex.call(addressnTaFvtM, uint6eznql, {from: accounts[1]});
		const boolJyAbZMO = await CryptozVKv3mGy.buyCard.call(uintgoJCZHd, {from: accounts[0]});
		const boolplcVVsP = await CryptozVKv3mGy.openBoosterCard.call(uintaH4NAYm, {from: accounts[1]});
		const stringVIY388K = await CryptozVKv3mGy.symbol.call({from: accounts[1]});
		const addressM5TQYZE = await CryptozVKv3mGy.transferFrom.call(addressolZhkT4, addressBSNc8Ok, uint7kSXLC, {from: accounts[0]});

		await expect(CryptozVKv3mGy.tokenOfOwnerByIndex.call(addressnTaFvtM, uint6eznql, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhM3sUmr = await Cryptoz.new({from: accounts[0]});
		const addressRyOz1mt = accounts[3]
		const uintfTqX4k3 = BigInt("976")
		const uinthgn8FOh = BigInt("394")
		const uint256tFeP47H = await CryptozhM3sUmr.totalSupply.call({from: accounts[1]});
		const addressfhUdU9J = await CryptozhM3sUmr.initialize.call(addressRyOz1mt, {from: accounts[4]});
		const uint32QZWat9K = await CryptozhM3sUmr.isValidCard.call(uintfTqX4k3, {from: accounts[2]});
		const uint32SqNRQ2p = await CryptozhM3sUmr.isValidCard.call(uinthgn8FOh, {from: accounts[1]});
		await CryptozhM3sUmr.f.call({from: accounts[4]});

		assert.equal(uint256tFeP47H, BigInt("0"))
		await expect(CryptozhM3sUmr.initialize.call(addressRyOz1mt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz2cm8nt = await Cryptoz.new({from: accounts[5]});
		const uintZgEv6z8 = BigInt("1680")
		const uintYAYf9gn = BigInt("187")
		const uintE7JjTgK = BigInt("1323")
		await Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]});
		await Cryptoz2cm8nt.f.call({from: accounts[1]});
		const uint32df0DZM = await Cryptoz2cm8nt.isValidCard.call(uintZgEv6z8, {from: accounts[2]});
		const boolaRmIdrs = await Cryptoz2cm8nt.buyBoosterCard.call(uintYAYf9gn, {from: accounts[3]});
		const uint256xjEvPge = await Cryptoz2cm8nt.sacrifice.call(uintE7JjTgK, {from: accounts[3]});

		await expect(Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		const uintlThV1Qc = BigInt("153")
		const uintiZsWYXA = BigInt("1741")
		const uintobXIYvN = BigInt("1047")
		const uinttA70xow = BigInt("1530")
		await Cryptozlk6gvHc.getTokensByRarity.call({from: accounts[4]});
		await Cryptozlk6gvHc.getOwnedCard.call(uintlThV1Qc, {from: accounts[1]});
		const uint32ug6GmZS = await Cryptozlk6gvHc.getFreeCard.call(uintiZsWYXA, {from: accounts[3]});
		const boolNhSa0c1 = await Cryptozlk6gvHc.buyCard.call(uintobXIYvN, {from: accounts[0]});
		const boolHTY9Kwi = await Cryptozlk6gvHc.buyCard.call(uinttA70xow, {from: accounts[3]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(Cryptozlk6gvHc.getTokensByRarity.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz2cm8nt = await Cryptoz.new({from: accounts[5]});
		const uintyqCKbp = BigInt("1680")
		const uinttEbfN5A = BigInt("1323")
		await Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]});
		const uint32df0DZM = await Cryptoz2cm8nt.isValidCard.call(uintyqCKbp, {from: accounts[2]});
		const uint256xjEvPge = await Cryptoz2cm8nt.sacrifice.call(uinttEbfN5A, {from: accounts[3]});

		await expect(Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		const addressZZRIJKx = accounts[0]
		const stringV73aWmx = await Cryptozlk6gvHc.symbol.call({from: accounts[3]});
		const addressQyerGSv = await Cryptozlk6gvHc.initialize.call(addressZZRIJKx, {from: accounts[1]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		assert.equal(stringV73aWmx, "Cryptoz")
		await expect(Cryptozlk6gvHc.initialize.call(addressZZRIJKx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz2cm8nt = await Cryptoz.new({from: accounts[5]});
		const uintCrP7A8 = BigInt("900")
		await Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]});
		const uint256ZfMwFD8 = await Cryptoz2cm8nt.tokenByIndex.call(uintCrP7A8, {from: accounts[1]});

		await expect(Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		const uintkCahoFY = BigInt("702")
		const addressCwzukLN = accounts[4]
		const addressvNnWNMM = accounts[2]
		const addressFwhfQl1 = accounts[0]
		const addressgm7ug9a = await Cryptozlk6gvHc.transferFrom.call(addressvNnWNMM, addressCwzukLN, uintkCahoFY, {from: accounts[3]});
		const addressM68hxIx = await Cryptozlk6gvHc.initialize.call(addressFwhfQl1, {from: accounts[0]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(Cryptozlk6gvHc.transferFrom.call(addressvNnWNMM, addressCwzukLN, uintkCahoFY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz2cm8nt = await Cryptoz.new({from: accounts[5]});
		const uinttHzPily = BigInt("1570")
		const uintaLY2Fw = BigInt("1307")
		await Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]});
		const stringSpAlxEr = await Cryptoz2cm8nt.tokenURI.call(uinttHzPily, {from: accounts[2]});
		const uint256xjEvPge = await Cryptoz2cm8nt.sacrifice.call(uintaLY2Fw, {from: accounts[3]});

		await expect(Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz2cm8nt = await Cryptoz.new({from: accounts[5]});
		const addressr7fe1US = accounts[3]
		const uintiDRIzD = BigInt("900")
		const stringXdM4uSa = await Cryptoz2cm8nt.symbol.call({from: accounts[0]});
		await Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]});
		const uint256arrayUU2PpwD = await Cryptoz2cm8nt.tokensOfOwner.call(addressr7fe1US, {from: accounts[0]});
		const uint256ZfMwFD8 = await Cryptoz2cm8nt.tokenByIndex.call(uintiDRIzD, {from: accounts[1]});

		assert.equal(stringXdM4uSa, "Cryptoz")
		await expect(Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmSb6JPF = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkZEJJje = BigInt("132")
		const addressn3mSeDx = accounts[0]
		const addressarJRJd0 = accounts[5]
		const uintE8Q9TUj = BigInt("1954")
		const uintR2FUZ1W = BigInt("1651")
		const uintv8enjZx = BigInt("851")
		const stringtLcszDh = await CryptozmSb6JPF.symbol.call({from: accounts[4]});
		const addressZHGWNmC = await CryptozmSb6JPF.transferFrom.call(addressarJRJd0, addressn3mSeDx, uintkZEJJje, {from: accounts[2]});
		const stringtxmisB = await CryptozmSb6JPF.name.call({from: accounts[2]});
		const boolxPsM0kn = await CryptozmSb6JPF.buyBoosterCard.call(uintE8Q9TUj, {from: accounts[1]});
		const boolH4M3F4 = await CryptozmSb6JPF.openBoosterCard.call(uintR2FUZ1W, {from: accounts[4]});
		const uint256ALgGel = await CryptozmSb6JPF.tokenByIndex.call(uintv8enjZx, {from: accounts[5]});
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		const uintiFLy0G = BigInt("1105")
		const uint256KGxJ1uD = await Cryptozlk6gvHc.totalSupply.call({from: accounts[4]});
		const boolkP1M0P = await Cryptozlk6gvHc.openBoosterCard.call(uintiFLy0G, {from: accounts[3]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		assert.equal(uint256KGxJ1uD, BigInt("0"))
		await expect(Cryptozlk6gvHc.openBoosterCard.call(uintiFLy0G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz2cm8nt = await Cryptoz.new({from: accounts[5]});
		const addresstjei13x = accounts[0]
		const uintoRhWsty = BigInt("1814")
		await Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]});
		const addressVxLxwa0 = await Cryptoz2cm8nt.linkMySponsor.call(addresstjei13x, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EaP4n19 = await Cryptoz2cm8nt.sacrifice.call(uintoRhWsty, {from: accounts[1]});

		await expect(Cryptoz2cm8nt.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		const uintbyNbafh = BigInt("1712")
		const uintKTDH95u = BigInt("419")
		const uintDV7Ecfj = BigInt("857")
		const uintArnrbNl = BigInt("45")
		const uintmgYB7VC = BigInt("52")
		const uintT20aoO = BigInt("65")
		const stringnIWovqd = "JY55X4HwA55mp4xKRNLRtCYCl"
		const stringIHC5zFX = "SIAgtrbV4sHPEWMJxWWXUXep9H4yThLpdpHRQobbGkhoJ8c76nSY29E6oLWRHO5YAaSwi8fy8tu9lnWw"
		const uintvsrTzpN = BigInt("68")
		const uintzW6tPnA = BigInt("1088")
		const uintokerntX = BigInt("772")
		const boolnYxawKM = await Cryptozlk6gvHc.loadNewCardType.call(uintvsrTzpN, stringIHC5zFX, stringnIWovqd, uintT20aoO, uintmgYB7VC, uintArnrbNl, uintDV7Ecfj, uintKTDH95u, uintbyNbafh, {from: accounts[0]});
		const uint256KGxJ1uD = await Cryptozlk6gvHc.totalSupply.call({from: accounts[4]});
		const boolkP1M0P = await Cryptozlk6gvHc.openBoosterCard.call(uintzW6tPnA, {from: accounts[3]});
		const boolI9NAWmR = await Cryptozlk6gvHc.buyBoosterCard.call(uintokerntX, {from: accounts[0]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		assert.equal(boolnYxawKM, true)
		assert.equal(uint256KGxJ1uD, BigInt("0"))
		await expect(Cryptozlk6gvHc.openBoosterCard.call(uintzW6tPnA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDJ7ShiB = await Cryptoz.new({from: accounts[4]});
		const uintqUqpTJO = BigInt("146")
		const uintQcMgC4z = BigInt("1385")
		const uintUlF14fB = BigInt("588")
		const uintnFH4PcE = BigInt("1618")
		const uintEsJFcrY = BigInt("839")
		const uintSPhxy4Q = BigInt("1986")
		const boolrgKb70g = await CryptozDJ7ShiB.addTocardType.call(uintEsJFcrY, uintnFH4PcE, uintUlF14fB, uintQcMgC4z, uintqUqpTJO, {from: accounts[4]});
		const boolj04K87s = await CryptozDJ7ShiB.openBoosterCard.call(uintSPhxy4Q, {from: accounts[2]});
		await CryptozDJ7ShiB.buyBoosterCardAndOpen.call({from: accounts[2]});
		await CryptozDJ7ShiB.f.call({from: accounts[0]});

		await expect(CryptozDJ7ShiB.addTocardType.call(uintEsJFcrY, uintnFH4PcE, uintUlF14fB, uintQcMgC4z, uintqUqpTJO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz2cm8nt = await Cryptoz.new({from: accounts[5]});
		const uintfGQPMKX = BigInt("919")
		const stringcF1hNx1 = await Cryptoz2cm8nt.name.call({from: accounts[3]});
		const uint256ZfMwFD8 = await Cryptoz2cm8nt.tokenByIndex.call(uintfGQPMKX, {from: accounts[1]});

		assert.equal(stringcF1hNx1, "Cryptoz Cards")
		await expect(Cryptoz2cm8nt.tokenByIndex.call(uintfGQPMKX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		const uintgEdwo7Z = BigInt("1712")
		const uintDnzMFcB = BigInt("419")
		const uintFbkAPob = BigInt("857")
		const uintyX6kHg4 = BigInt("45")
		const uintOusyQ79 = BigInt("52")
		const uintDkLJNuz = BigInt("65")
		const stringnIWovqd = "JY55X4HwA55mp4xKRNLRtCYCl"
		const stringIHC5zFX = "SIAgtrbV4sHPEWMJxWWXUXep9H4yThLpdpHRQobbGkhoJ8c76nSY29E6oLWRHO5YAaSwi8fy8tu9lnWw"
		const uintI7qmHv = BigInt("68")
		const addressiGtAMog = accounts[0]
		await Cryptozlk6gvHc.withdraw.call({from: accounts[0]});
		const boolnYxawKM = await Cryptozlk6gvHc.loadNewCardType.call(uintI7qmHv, stringIHC5zFX, stringnIWovqd, uintDkLJNuz, uintOusyQ79, uintyX6kHg4, uintFbkAPob, uintDnzMFcB, uintgEdwo7Z, {from: accounts[0]});
		const stringXMnCxlp = await Cryptozlk6gvHc.symbol.call({from: accounts[4]});
		const addressQpJPOxS = await Cryptozlk6gvHc.initialize.call(addressiGtAMog, {from: accounts[1]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(Cryptozlk6gvHc.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozlk6gvHc = await Cryptoz.new({from: accounts[0]});
		const addressETB1z2H = accounts[4]
		const uintWauC6tD = BigInt("149")
		const uintUwr8hUc = BigInt("1712")
		const uintPT7Jt4n = BigInt("419")
		const uintvd7WwmK = BigInt("857")
		const uintFwgd9hK = BigInt("45")
		const uintwPLxJUl = BigInt("52")
		const uintthh2EPJ = BigInt("65")
		const stringnIWovqd = "JY55X4HwA55mp4xKRNLRtCYCl"
		const stringIHC5zFX = "SIAgtrbV4sHPEWMJxWWXUXep9H4yThLpdpHRQobbGkhoJ8c76nSY29E6oLWRHO5YAaSwi8fy8tu9lnWw"
		const uintGzD3OlD = BigInt("68")
		const addressSALHZf4 = await Cryptozlk6gvHc.initialize.call(addressETB1z2H, {from: accounts[0]});
		const uint256NbtU5Aw = await Cryptozlk6gvHc.tokenByIndex.call(uintWauC6tD, {from: accounts[5]});
		const boolnYxawKM = await Cryptozlk6gvHc.loadNewCardType.call(uintGzD3OlD, stringIHC5zFX, stringnIWovqd, uintthh2EPJ, uintwPLxJUl, uintFwgd9hK, uintvd7WwmK, uintPT7Jt4n, uintUwr8hUc, {from: accounts[0]});
		await Cryptozlk6gvHc.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(Cryptozlk6gvHc.tokenByIndex.call(uintWauC6tD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})