const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsBu6h3kj = await UFragments.new({from: accounts[0]});
		const intQFUvRI0 = BigInt("-1215")
		const inteGa547V = BigInt("-524")
//		await UFragmentsBu6h3kj.renounceOwnership.call({from: accounts[4]});
//		const int256fo3ToQ6 = await UFragmentsBu6h3kj.sub.call(inteGa547V, intQFUvRI0, {from: accounts[2]});

		await expect(UFragmentsBu6h3kj.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragments0KNAcu = await UFragments.new({from: accounts[3]});
		const uintUO2Nfex = BigInt("23")
		const stringiRCQnU9 = "ZeKzS6KfO9PgcJHzXMiVtbw0lDCgLHOGbzQNwVeRO9wEBOwk4MEA8OJi08xECCdlSzBj8N"
		const stringauNm2P4 = "2N5BTdcJackYB6JVUViS8wsngcEfPleEA4lNTrh1uJASeR9oTWtKnKXaFJfxUaMvKUmZEvY3Ys3FFahjhofrf2"
		const addressxicfxh4 = accounts[3]
		const intexHgGDs = BigInt("1202")
		const intZ770koj = BigInt("-894")
		const uint8zUPlkLl = await UFragments0KNAcu.decimals.call({from: accounts[5]});
		const stringDNEl9Nl = await UFragments0KNAcu.initialize.call(stringauNm2P4, stringiRCQnU9, uintUO2Nfex, {from: accounts[4]});
//		const addressTeGauJH = await UFragments0KNAcu.initialize.call(addressxicfxh4, {from: accounts[0]});
//		const int256lTOWMD = await UFragments0KNAcu.mul.call(intZ770koj, intexHgGDs, {from: accounts[3]});
//		await UFragments0KNAcu.initializer.call({from: "0x0000000000000000000000000000000000000001"});
//		await UFragments0KNAcu.initializer.call({from: accounts[2]});

		assert.equal(uint8zUPlkLl, BigInt("0"))
		await expect(UFragments0KNAcu.initialize.call(addressxicfxh4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsB4Zya3 = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intxrTQTuI = BigInt("-1304")
		const intV3WxHTj = BigInt("40")
		const inty11V1Rs = BigInt("-1241")
		const intRvCBntz = BigInt("-1260")
		const int256VZDycOj = await UFragmentsB4Zya3.sub.call(intV3WxHTj, intxrTQTuI, {from: accounts[0]});
		const int256V7uKNUC = await UFragmentsB4Zya3.sub.call(intRvCBntz, inty11V1Rs, {from: accounts[4]});
		const uint256fLTXMEU = await UFragmentsB4Zya3.calRebase.call({from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentsvDGjz8p = await UFragments.new({from: accounts[0]});
		const intUPYiH4J = BigInt("1887")
		const intD5SuJtO = BigInt("-1471")
		const intEGKUnW = BigInt("728")
		const intEjw9QAq = BigInt("1562")
		const uintI3oG9Ej = BigInt("220")
		const addresspgdTd4L = accounts[1]
//		const int256sAtCheC = await UFragmentsvDGjz8p.mul.call(intD5SuJtO, intUPYiH4J, {from: accounts[5]});
//		const int256A2XLvK4 = await UFragmentsvDGjz8p.div.call(intEjw9QAq, intEGKUnW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolo1BezNf = await UFragmentsvDGjz8p.approve.call(addresspgdTd4L, uintI3oG9Ej, {from: accounts[4]});

		await expect(UFragmentsvDGjz8p.mul.call(intD5SuJtO, intUPYiH4J, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsK5VttaX = await UFragments.new({from: accounts[2]});
		const uinty9StFf = BigInt("1292")
		const addresshPW8uUr = accounts[0]
		const addressfiMujc3 = accounts[4]
		const addressxRnJgd = await UFragmentsK5VttaX.owner.call({from: accounts[3]});
//		await UFragmentsK5VttaX.onlyOwner.call({from: accounts[1]});
//		const booloMdrTg8 = await UFragmentsK5VttaX.rebaseTimeInfo.call({from: accounts[0]});
//		const boolnvMDpja = await UFragmentsK5VttaX.transferFrom.call(addressfiMujc3, addresshPW8uUr, uinty9StFf, {from: accounts[0]});

		assert.equal(addressxRnJgd, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsK5VttaX.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsn6kgcFT = await UFragments.new({from: accounts[2]});
		const intLDxLvtj = BigInt("-848")
		const intkOZJzF = BigInt("1518")
		const addressw5VrCr = accounts[5]
		const addressgTis7OI = accounts[2]
		const intQCUe73r = BigInt("-1741")
		const inttRhTCes = BigInt("1072")
		const intqNez6KS = BigInt("1997")
		const intTj8XeKR = BigInt("-1666")
		const uint256ZZ27nqA = await UFragmentsn6kgcFT.totalSupply.call({from: accounts[0]});
//		const int256zdZb4QV = await UFragmentsn6kgcFT.sub.call(intkOZJzF, intLDxLvtj, {from: accounts[1]});
//		const uint256XihpJ0a = await UFragmentsn6kgcFT.allowance.call(addressgTis7OI, addressw5VrCr, {from: accounts[4]});
//		const int256dk2O87E = await UFragmentsn6kgcFT.div.call(inttRhTCes, intQCUe73r, {from: accounts[4]});
//		const int256ZVgj0vT = await UFragmentsn6kgcFT.div.call(intTj8XeKR, intqNez6KS, {from: accounts[3]});
//		const boolpvwJYxC = await UFragmentsn6kgcFT.isOwner.call({from: accounts[0]});

		assert.equal(uint256ZZ27nqA, BigInt("0"))
		await expect(UFragmentsn6kgcFT.sub.call(intkOZJzF, intLDxLvtj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsn6kgcFT = await UFragments.new({from: accounts[2]});
		const uintXMj1A7 = BigInt("1563")
		const addresspBthOU5 = accounts[2]
		const addressVg7CsJf = accounts[1]
		const intHXhayKo = BigInt("-848")
		const intkDFi3dR = BigInt("1518")
		const addressg6YRDqc = accounts[2]
		const addressOky3VO = accounts[2]
		const uintSezar7V = BigInt("1397")
		const addressXE35Weq = accounts[5]
		const addresswm1vI8G = accounts[5]
		const addressh6j2HE = accounts[2]
		const intg1UHMOs = BigInt("1246")
		const intuWwN5UN = BigInt("1072")
		const intNw3laDX = BigInt("1997")
		const intQklBVj = BigInt("-1666")
//		const boolu926iO = await UFragmentsn6kgcFT.transferFrom.call(addressVg7CsJf, addresspBthOU5, uintXMj1A7, {from: accounts[1]});
//		const uint256ZZ27nqA = await UFragmentsn6kgcFT.totalSupply.call({from: accounts[0]});
//		const int256zdZb4QV = await UFragmentsn6kgcFT.sub.call(intkDFi3dR, intHXhayKo, {from: accounts[1]});
//		const uint256yQpjEwJ = await UFragmentsn6kgcFT.allowance.call(addressOky3VO, addressg6YRDqc, {from: accounts[1]});
//		const boolcVJ4U1H = await UFragmentsn6kgcFT.approve.call(addressXE35Weq, uintSezar7V, {from: accounts[4]});
//		const uint256XihpJ0a = await UFragmentsn6kgcFT.allowance.call(addressh6j2HE, addresswm1vI8G, {from: accounts[4]});
//		const int256dk2O87E = await UFragmentsn6kgcFT.div.call(intuWwN5UN, intg1UHMOs, {from: accounts[4]});
//		const int256ZVgj0vT = await UFragmentsn6kgcFT.div.call(intQklBVj, intNw3laDX, {from: accounts[3]});
//		const boolpvwJYxC = await UFragmentsn6kgcFT.isOwner.call({from: accounts[0]});

		await expect(UFragmentsn6kgcFT.transferFrom.call(addressVg7CsJf, addresspBthOU5, uintXMj1A7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsn6kgcFT = await UFragments.new({from: accounts[2]});
		const uintceDGzD6 = BigInt("1836")
		const addressO7BRdzJ = accounts[5]
		const intUC84lw = BigInt("-848")
		const intTnZYAXr = BigInt("1518")
		const addressjCaylwb = accounts[5]
		const addressvkNmp8K = accounts[2]
		const intM5xdpb = BigInt("1997")
		const inthgvJWuz = BigInt("-1666")
		const uint256ZZ27nqA = await UFragmentsn6kgcFT.totalSupply.call({from: accounts[0]});
		const boolc20cyLQ = await UFragmentsn6kgcFT.approve.call(addressO7BRdzJ, uintceDGzD6, {from: accounts[2]});
//		const int256zdZb4QV = await UFragmentsn6kgcFT.sub.call(intTnZYAXr, intUC84lw, {from: accounts[1]});
//		const uint256XihpJ0a = await UFragmentsn6kgcFT.allowance.call(addressvkNmp8K, addressjCaylwb, {from: accounts[4]});
//		const int256ZVgj0vT = await UFragmentsn6kgcFT.div.call(inthgvJWuz, intM5xdpb, {from: accounts[3]});
//		const boolpvwJYxC = await UFragmentsn6kgcFT.isOwner.call({from: accounts[0]});

		assert.equal(boolc20cyLQ, true)
		assert.equal(uint256ZZ27nqA, BigInt("0"))
		await expect(UFragmentsn6kgcFT.sub.call(intTnZYAXr, intUC84lw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsIpZvtd = await UFragments.new({from: accounts[5]});
		const uintFksEkG = BigInt("192")
		const addresso84jow7 = accounts[1]
		const addressXgfnRVZ = "0x0000000000000000000000000000000000000001"
		const intLJt5jVi = BigInt("-459")
		const intWH5fuFo = BigInt("-1819")
		const intJtDmqpj = BigInt("-1872")
		const intlr6mili = BigInt("1293")
//		const boolD2JHBpm = await UFragmentsIpZvtd.transfer.call(addresso84jow7, uintFksEkG, {from: accounts[1]});
//		const addressBUAKM25 = await UFragmentsIpZvtd.initialize.call(addressXgfnRVZ, {from: accounts[1]});
//		await UFragmentsIpZvtd.renounceOwnership.call({from: accounts[2]});
//		const int256oUa1jP = await UFragmentsIpZvtd.div.call(intWH5fuFo, intLJt5jVi, {from: accounts[2]});
//		const int256dWgru0q = await UFragmentsIpZvtd.sub.call(intlr6mili, intJtDmqpj, {from: accounts[1]});
//		const uint256KJEormF = await UFragmentsIpZvtd.totalSupply.call({from: accounts[3]});

		await expect(UFragmentsIpZvtd.transfer.call(addresso84jow7, uintFksEkG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsp4wAmS = await UFragments.new({from: accounts[5]});
		const addressyMpYFel = accounts[0]
		const addressr6MDe9 = accounts[0]
		const intkpujYh2 = BigInt("581")
		const intgpe0rH5 = BigInt("-1925")
		const addressh0v1PiA = accounts[4]
		const addressn33eFl0 = "0x0000000000000000000000000000000000000001"
		const uint256L5V0zi = await UFragmentsp4wAmS.allowance.call(addressr6MDe9, addressyMpYFel, {from: "0x0000000000000000000000000000000000000001"});
		const addressAOAJ8if = await UFragmentsp4wAmS.owner.call({from: accounts[1]});
//		const int256OfCenOU = await UFragmentsp4wAmS.sub.call(intgpe0rH5, intkpujYh2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKvYwJcE = await UFragmentsp4wAmS.isOwner.call({from: accounts[1]});
//		const uint256eFafx1J = await UFragmentsp4wAmS.allowance.call(addressn33eFl0, addressh0v1PiA, {from: accounts[4]});

		assert.equal(addressAOAJ8if, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256L5V0zi, BigInt("0"))
		await expect(UFragmentsp4wAmS.sub.call(intgpe0rH5, intkpujYh2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsuK3nEWJ = await UFragments.new({from: accounts[1]});
		const addressMAixghG = accounts[1]
		const stringfw1KHIn = await UFragmentsuK3nEWJ.name.call({from: accounts[0]});
//		const addresseRUcniG = await UFragmentsuK3nEWJ.transferOwnership.call(addressMAixghG, {from: accounts[3]});
//		const addressNaFOr4t = await UFragmentsuK3nEWJ.owner.call({from: accounts[2]});

		assert.equal(stringfw1KHIn, "")
		await expect(UFragmentsuK3nEWJ.transferOwnership.call(addressMAixghG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsp4wAmS = await UFragments.new({from: accounts[5]});
		const boolKvYwJcE = await UFragmentsp4wAmS.isOwner.call({from: accounts[1]});
//		const uint256yXtoif0 = await UFragmentsp4wAmS.calRebase.call({from: accounts[0]});

		assert.equal(boolKvYwJcE, false)
		await expect(UFragmentsp4wAmS.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsIpZvtd = await UFragments.new({from: accounts[5]});
		const addressRMolG4k = accounts[3]
		const uintzMyJEAy = BigInt("192")
		const addressfBmufZ1 = accounts[1]
		const intnGMrZrh = BigInt("-447")
		const inttaq1kHH = BigInt("-491")
		const stringM18On0I = await UFragmentsIpZvtd.symbol.call({from: accounts[3]});
//		const addressqnsSrNW = await UFragmentsIpZvtd.initialize.call(addressRMolG4k, {from: accounts[4]});
//		const boolD2JHBpm = await UFragmentsIpZvtd.transfer.call(addressfBmufZ1, uintzMyJEAy, {from: accounts[1]});
//		await UFragmentsIpZvtd.renounceOwnership.call({from: accounts[2]});
//		const int256oUa1jP = await UFragmentsIpZvtd.div.call(inttaq1kHH, intnGMrZrh, {from: accounts[2]});
//		const uint256KJEormF = await UFragmentsIpZvtd.totalSupply.call({from: accounts[3]});

		assert.equal(stringM18On0I, "")
		await expect(UFragmentsIpZvtd.initialize.call(addressRMolG4k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsDiEWdv = await UFragments.new({from: accounts[2]});
		const addresskG1Rbqa = accounts[2]
		const boolwM5aXld = await UFragmentsDiEWdv.rebaseTimeInfo.call({from: accounts[3]});
		const addressdFFaehz = await UFragmentsDiEWdv.owner.call({from: accounts[3]});
//		await UFragmentsDiEWdv.renounceOwnership.call({from: accounts[1]});
//		const addressQOUl3nT = await UFragmentsDiEWdv.transferOwnership.call(addresskG1Rbqa, {from: accounts[3]});

		assert.equal(addressdFFaehz, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsDiEWdv.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsp4wAmS = await UFragments.new({from: accounts[5]});
		const uintzYGaS3B = BigInt("1050")
		const addressxVsuow5 = accounts[1]
		const addressKKg8ps = "0x00000000000000000000000000000000000000-1"
		const intxiCyWuv = BigInt("1305")
		const boolEA9L282 = await UFragmentsp4wAmS.approve.call(addressxVsuow5, uintzYGaS3B, {from: accounts[2]});
		const stringf9SmtAc = await UFragmentsp4wAmS.name.call({from: accounts[4]});
//		const uint256L4p7oCf = await UFragmentsp4wAmS.balanceOf.call(addressKKg8ps, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8O3fpRYE = await UFragmentsp4wAmS.decimals.call({from: accounts[4]});
//		const boolkhLxdBg = await UFragmentsp4wAmS.rebaseTimeInfo.call({from: accounts[1]});
//		const int256m1ewPlc = await UFragmentsp4wAmS.abs.call(intxiCyWuv, {from: accounts[1]});
//		const uint256TzD036o = await UFragmentsp4wAmS.totalSupply.call({from: accounts[1]});

		assert.equal(boolEA9L282, true)
		assert.equal(stringf9SmtAc, "")
		await expect(UFragmentsp4wAmS.balanceOf.call(addressKKg8ps, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})