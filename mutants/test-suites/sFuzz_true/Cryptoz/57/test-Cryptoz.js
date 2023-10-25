const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozeE3TqMA = await Cryptoz.new({from: accounts[1]});
		const uintsi1EJU = BigInt("683")
		const uints6dCLX1 = BigInt("1944")
		const uintafAJ8SF = BigInt("1763")
		const uintW5Uxq8C = BigInt("1251")
//		const uint256nI5Ms3w = await CryptozeE3TqMA.tokenByIndex.call(uintsi1EJU, {from: accounts[2]});
//		const stringtOuxkrQ = await CryptozeE3TqMA.symbol.call({from: accounts[4]});
//		await CryptozeE3TqMA.buyBoosterCardAndOpen.call({from: accounts[1]});
//		const uint32mKkX9A2 = await CryptozeE3TqMA.getFreeCard.call(uints6dCLX1, {from: accounts[2]});
//		const boolXpWLZuw = await CryptozeE3TqMA.openBoosterCard.call(uintafAJ8SF, {from: accounts[2]});
//		await CryptozeE3TqMA.getOwnedCard.call(uintW5Uxq8C, {from: accounts[1]});

		await expect(CryptozeE3TqMA.tokenByIndex.call(uintsi1EJU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozrttEeYe = await Cryptoz.new({from: accounts[1]});
		const addresskSaDT6D = accounts[4]
		const uintiEXjiJK = BigInt("85")
		const addressclZFYFw = accounts[2]
		const addressFax59RL = accounts[3]
//		const addressTDgad3H = await CryptozrttEeYe.linkMySponsor.call(addresskSaDT6D, {from: accounts[0]});
//		const uint256wmjsyIW = await CryptozrttEeYe.totalSupply.call({from: accounts[0]});
//		await CryptozrttEeYe.f.call({from: accounts[3]});
//		const addressqjvoc5R = await CryptozrttEeYe.transferFrom.call(addressFax59RL, addressclZFYFw, uintiEXjiJK, {from: accounts[0]});

		await expect(CryptozrttEeYe.linkMySponsor.call(addresskSaDT6D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWtmiJXg = await Cryptoz.new({from: accounts[2]});
		const uintxg7XP80 = BigInt("398")
		const uintLPCJw0s = BigInt("1495")
		const uintg5TgOU = BigInt("30")
//		await CryptozWtmiJXg.getOwnedCard.call(uintxg7XP80, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptozWtmiJXg.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringPtCfldC = await CryptozWtmiJXg.tokenURI.call(uintLPCJw0s, {from: accounts[1]});
//		const boolfavuDq1 = await CryptozWtmiJXg.buyCard.call(uintg5TgOU, {from: accounts[3]});

		await expect(CryptozWtmiJXg.getOwnedCard.call(uintxg7XP80, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozh7VnI6r = await Cryptoz.new({from: accounts[4]});
		const uintq83paXy = BigInt("1723")
		const addressc0dyPdX = accounts[4]
		const uintnLHlKZ8 = BigInt("305")
		const uint256skX3SPK = await Cryptozh7VnI6r.totalSupply.call({from: accounts[4]});
//		const uint32NtX2D0s = await Cryptozh7VnI6r.isValidCard.call(uintq83paXy, {from: accounts[1]});
//		const addressLI2Y8sk = await Cryptozh7VnI6r.linkMySponsor.call(addressc0dyPdX, {from: accounts[5]});
//		await Cryptozh7VnI6r.f.call({from: accounts[5]});
//		await Cryptozh7VnI6r.getOwnedCard.call(uintnLHlKZ8, {from: accounts[1]});

		assert.equal(uint256skX3SPK, BigInt("0"))
		await expect(Cryptozh7VnI6r.isValidCard.call(uintq83paXy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozSUqZhUp = await Cryptoz.new({from: accounts[2]});
		const uintDtSO8Zq = BigInt("1456")
		const uintNcxBJ6f = BigInt("1943")
		const uintlEV1sad = BigInt("680")
		const uintpQAH8Lk = BigInt("749")
		const addressXUs7r2V = "0x0000000000000000000000000000000000000001"
		const uintyao3T4j = BigInt("521")
//		const boolhL1oFUx = await CryptozSUqZhUp.buyBoosterCard.call(uintDtSO8Zq, {from: accounts[2]});
//		const boolDwACRXw = await CryptozSUqZhUp.buyBoosterCard.call(uintNcxBJ6f, {from: accounts[1]});
//		const uint32QYt1SB8 = await CryptozSUqZhUp.getFreeCard.call(uintlEV1sad, {from: accounts[1]});
//		const uint256k2sD7CU = await CryptozSUqZhUp.tokenOfOwnerByIndex.call(addressXUs7r2V, uintpQAH8Lk, {from: accounts[1]});
//		const uint32iLmcugc = await CryptozSUqZhUp.getFreeCard.call(uintyao3T4j, {from: accounts[2]});

		await expect(CryptozSUqZhUp.buyBoosterCard.call(uintDtSO8Zq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozGeDn30X = await Cryptoz.new({from: accounts[4]});
		const uintI4nvLIC = BigInt("1607")
		const uintQ2WtcDv = BigInt("1627")
//		await CryptozGeDn30X.f.call({from: accounts[3]});
//		const uint32jn3qA7U = await CryptozGeDn30X.isValidCard.call(uintI4nvLIC, {from: accounts[2]});
//		await CryptozGeDn30X.f.call({from: accounts[1]});
//		const boolCWZwxim = await CryptozGeDn30X.buyBoosterCard.call(uintQ2WtcDv, {from: accounts[3]});

		await expect(CryptozGeDn30X.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const uintEgWGsOv = BigInt("155")
		const addressyFT03js = accounts[0]
		const addressIxtxv0X = accounts[1]
		const addressrlWbJRq = accounts[3]
		const uintIPybOVk = BigInt("807")
//		const addressnyzpJqm = await CryptozYp9HhKR.transferFrom.call(addressIxtxv0X, addressyFT03js, uintEgWGsOv, {from: accounts[2]});
//		const uintv3mCyuw = await CryptozYp9HhKR.getTimeToDailyBonus.call(addressrlWbJRq, {from: accounts[4]});
//		const uint256MVj272c = await CryptozYp9HhKR.sacrifice.call(uintIPybOVk, {from: accounts[1]});

		await expect(CryptozYp9HhKR.transferFrom.call(addressIxtxv0X, addressyFT03js, uintEgWGsOv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const addressj14rCK = accounts[3]
		const uintbMzHUO = BigInt("872")
		const uintBNIsVhE = BigInt("1288")
		const uint256GTfAwvi = await CryptozYp9HhKR.totalSupply.call({from: accounts[0]});
		const uintv3mCyuw = await CryptozYp9HhKR.getTimeToDailyBonus.call(addressj14rCK, {from: accounts[4]});
//		const boolpD1tMJe = await CryptozYp9HhKR.buyBoosterCard.call(uintbMzHUO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256MVj272c = await CryptozYp9HhKR.sacrifice.call(uintBNIsVhE, {from: accounts[1]});

		assert.equal(uint256GTfAwvi, BigInt("0"))
		assert.equal(uintv3mCyuw, BigInt("1630204022"))
		await expect(CryptozYp9HhKR.buyBoosterCard.call(uintbMzHUO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const address2j0atf = accounts[3]
		const uintTDkxrHd = BigInt("807")
		const uintv3mCyuw = await CryptozYp9HhKR.getTimeToDailyBonus.call(address2j0atf, {from: accounts[4]});
//		const uint256MVj272c = await CryptozYp9HhKR.sacrifice.call(uintTDkxrHd, {from: accounts[1]});

		assert.equal(uintv3mCyuw, BigInt("1630204025"))
		await expect(CryptozYp9HhKR.sacrifice.call(uintTDkxrHd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozumcsccw = await Cryptoz.new({from: accounts[5]});
		const addresszc8uCua = accounts[1]
		const uintNXNG9jw = BigInt("886")
		const addressjCGXt27 = accounts[0]
		const uintJCZg6SL = BigInt("1065")
		const uint256arraysPxYvnQ = await Cryptozumcsccw.tokensOfOwner.call(addresszc8uCua, {from: accounts[3]});
//		const uint256YYBQtU = await Cryptozumcsccw.sacrifice.call(uintNXNG9jw, {from: accounts[1]});
//		const uintxHJto0h = await Cryptozumcsccw.getTimeToDailyBonus.call(addressjCGXt27, {from: accounts[1]});
//		const stringAJL1dyy = await Cryptozumcsccw.name.call({from: accounts[5]});
//		const uint256bqBchGW = await Cryptozumcsccw.sacrifice.call(uintJCZg6SL, {from: accounts[2]});

		assert.equal(uint256arraysPxYvnQ, BigInt(""))
		await expect(Cryptozumcsccw.sacrifice.call(uintNXNG9jw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozp2ZeN78 = await Cryptoz.new({from: accounts[3]});
		const uintdmravrT = BigInt("100")
		const uintycbbBe8 = BigInt("93")
		const uintqp5zBr = BigInt("180")
		const uinttCzblm7 = BigInt("1700")
		const uintDwZnyHb = BigInt("215")
		const uintWVcKVr = BigInt("590")
		const uint256KrhgXAS = await Cryptozp2ZeN78.totalSupply.call({from: accounts[1]});
//		const boolQvIa263 = await Cryptozp2ZeN78.addTocardType.call(uintDwZnyHb, uinttCzblm7, uintqp5zBr, uintycbbBe8, uintdmravrT, {from: accounts[0]});
//		const uint32rCeyLj = await Cryptozp2ZeN78.getFreeCard.call(uintWVcKVr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KrhgXAS, BigInt("0"))
		await expect(Cryptozp2ZeN78.addTocardType.call(uintDwZnyHb, uinttCzblm7, uintqp5zBr, uintycbbBe8, uintdmravrT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const uintg5LFrVQ = BigInt("571")
		const addressiiLF8fX = accounts[2]
		const addressV5exDLS = accounts[4]
		const uintgOsMdrx = BigInt("807")
//		const uint256EQwrQ7i = await CryptozYp9HhKR.tokenOfOwnerByIndex.call(addressiiLF8fX, uintg5LFrVQ, {from: accounts[0]});
//		const uintv3mCyuw = await CryptozYp9HhKR.getTimeToDailyBonus.call(addressV5exDLS, {from: accounts[4]});
//		const uint256MVj272c = await CryptozYp9HhKR.sacrifice.call(uintgOsMdrx, {from: accounts[1]});

		await expect(CryptozYp9HhKR.tokenOfOwnerByIndex.call(addressiiLF8fX, uintg5LFrVQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozqt8f8uW = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAD9l9qd = BigInt("1394")
		const uintkLpbk72 = BigInt("492")
		const uint256dpxRvFZ = await Cryptozqt8f8uW.sacrifice.call(uintAD9l9qd, {from: accounts[5]});
		const booliKgTsOE = await Cryptozqt8f8uW.buyCard.call(uintkLpbk72, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const Cryptozp2ZeN78 = await Cryptoz.new({from: accounts[3]});
		const uintHjQPjok = BigInt("1163")
		const uintlWZAnCD = BigInt("1603")
		const uintOQJdAe7 = BigInt("100")
		const uintOH32vCy = BigInt("93")
		const uintTJ3C0bM = BigInt("180")
		const uintAFjPSxW = BigInt("1700")
		const uintUgt8wUH = BigInt("215")
		const uintoZobY96 = BigInt("590")
		const uint256KrhgXAS = await Cryptozp2ZeN78.totalSupply.call({from: accounts[1]});
//		const boolN3iXmz = await Cryptozp2ZeN78.openBoosterCard.call(uintHjQPjok, {from: accounts[2]});
//		const uint256csJOhx8 = await Cryptozp2ZeN78.tokenByIndex.call(uintlWZAnCD, {from: accounts[3]});
//		const boolQvIa263 = await Cryptozp2ZeN78.addTocardType.call(uintUgt8wUH, uintAFjPSxW, uintTJ3C0bM, uintOH32vCy, uintOQJdAe7, {from: accounts[0]});
//		const uint32rCeyLj = await Cryptozp2ZeN78.getFreeCard.call(uintoZobY96, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KrhgXAS, BigInt("0"))
		await expect(Cryptozp2ZeN78.openBoosterCard.call(uintHjQPjok, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const uintFOFtiC = BigInt("1096")
		const uintjSYMHI8 = BigInt("807")
		const stringtvhL8DJ = await CryptozYp9HhKR.tokenURI.call(uintFOFtiC, {from: accounts[3]});
//		const uint256MVj272c = await CryptozYp9HhKR.sacrifice.call(uintjSYMHI8, {from: accounts[1]});

		assert.equal(stringtvhL8DJ, "https://cryptoz.cards/data/1096")
		await expect(CryptozYp9HhKR.sacrifice.call(uintjSYMHI8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const uintiDbHjcQ = BigInt("590")
		const addresscN9FSBX = accounts[4]
//		await CryptozYp9HhKR.getTokensByRarity.call({from: accounts[0]});
//		const uint32Qkr42d = await CryptozYp9HhKR.getFreeCard.call(uintiDbHjcQ, {from: accounts[1]});
//		const uintv3mCyuw = await CryptozYp9HhKR.getTimeToDailyBonus.call(addresscN9FSBX, {from: accounts[4]});

		await expect(CryptozYp9HhKR.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz3CTci0 = await Cryptoz.new({from: accounts[0]});
		const uintvjpEHbT = BigInt("126")
		const uintzBbAUTR = BigInt("911")
		const uints6l7jqm = BigInt("1912")
		const uintY3g2AW6 = BigInt("20")
		const uintjN9sBt1 = BigInt("179")
		const uintrf0fChN = BigInt("236")
		const stringGwUfoCK = "jlbIsaxu5bk"
		const stringWxBpWG2 = "IXuHx2jvT5NoAJyy9JGQAQDRJbmdjS6DEdsMBrZprqdk9G2OCjgiIJt7Gel5K"
		const uintN6CiVX = BigInt("111")
		const uintYrhEhT1 = BigInt("792")
		const uintOiUMmvl = BigInt("161")
//		await Cryptoz3CTci0.buyBoosterCardAndOpen.call({from: accounts[4]});
//		const boolPsPyakV = await Cryptoz3CTci0.loadNewCardType.call(uintN6CiVX, stringWxBpWG2, stringGwUfoCK, uintrf0fChN, uintjN9sBt1, uintY3g2AW6, uints6l7jqm, uintzBbAUTR, uintvjpEHbT, {from: accounts[0]});
//		await Cryptoz3CTci0.getOwnedCard.call(uintYrhEhT1, {from: accounts[0]});
//		const stringX2iMwr0 = await Cryptoz3CTci0.tokenURI.call(uintOiUMmvl, {from: accounts[0]});

		await expect(Cryptoz3CTci0.buyBoosterCardAndOpen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozgYIEQai = await Cryptoz.new({from: accounts[1]});
		const uintHGDBz90 = BigInt("1575")
		const uintblJr0dh = BigInt("546")
		const stringcAgG4lE = await CryptozgYIEQai.symbol.call({from: accounts[4]});
//		const uint32GLs8zuB = await CryptozgYIEQai.isValidCard.call(uintHGDBz90, {from: accounts[0]});
//		await CryptozgYIEQai.getBonusBoosters.call({from: accounts[4]});
//		const uint32eXRivii = await CryptozgYIEQai.getFreeCard.call(uintblJr0dh, {from: accounts[0]});

		assert.equal(stringcAgG4lE, "Cryptoz")
		await expect(CryptozgYIEQai.isValidCard.call(uintHGDBz90, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const addresscSsqyJ8 = accounts[4]
//		await CryptozYp9HhKR.getBonusBoosters.call({from: accounts[5]});
//		const uintv3mCyuw = await CryptozYp9HhKR.getTimeToDailyBonus.call(addresscSsqyJ8, {from: accounts[4]});

		await expect(CryptozYp9HhKR.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuyB3M6l = await Cryptoz.new({from: accounts[2]});
		const uintWgFcES3 = BigInt("1294")
		const uintDmlfOe = BigInt("234")
		const uintvUaJuxX = BigInt("1760")
		const uintvfvBkX1 = BigInt("187")
		const uintoOrVWde = BigInt("42")
		const uintAGLcIJv = BigInt("151")
		const stringexccZXz = "mBpvVV2l2Y5PmdyaRzjxmQ7BM"
		const stringPqI5cOZ = "VCuSiuv03XdMjfJbqPf7QuMSoGd3FIrCpFhAMWiqdFym5NsK3lCkCMWx628umWNF5g47Jt9EboLKQSDl8H"
		const uintOfSZiaT = BigInt("98")
		const uintj6JjoyB = BigInt("1674")
		const uintt8RsGE7 = BigInt("1")
		const uintZAIk03 = BigInt("1041")
		const uintvSObnEv = BigInt("89")
		const uintJvpUesI = BigInt("858")
		const uintyVPWCc = BigInt("536")
		const uintyfaICMp = BigInt("9")
		const uintgEw9AM = BigInt("186")
		const uinthf9EVQl = BigInt("998")
		const uintafnr2wY = BigInt("1249")
		const uint1O0NdQ = BigInt("1208")
		const uintGNJwCg5 = BigInt("303")
		const uintHHEk1P = BigInt("173")
		const uintAO5cw8q = BigInt("694")
		const uintyXGVZQH = BigInt("215")
		const uintvJaQoG9 = BigInt("88")
		const uintkzqyhI5 = BigInt("239")
		const stringklZY8zK = "hREENvexM6JBybTaGFjPidvVw9dRuj1B8UWGHpTslJOJ6KNXMmkJ"
		const stringdOkHvwX = "2uTGPkX64LlwmOO4ssUKqGiX"
		const uintRv4PgM3 = BigInt("31")
		const boolARrQDti = await CryptozuyB3M6l.loadNewCardType.call(uintOfSZiaT, stringPqI5cOZ, stringexccZXz, uintAGLcIJv, uintoOrVWde, uintvfvBkX1, uintvUaJuxX, uintDmlfOe, uintWgFcES3, {from: accounts[2]});
//		const boolVchy8hw = await CryptozuyB3M6l.buyCard.call(uintj6JjoyB, {from: accounts[2]});
//		const boolbTXzhi4 = await CryptozuyB3M6l.addTocardType.call(uintyVPWCc, uintJvpUesI, uintvSObnEv, uintZAIk03, uintt8RsGE7, {from: accounts[5]});
//		await CryptozuyB3M6l.withdraw.call({from: accounts[0]});
//		const boolyFymDB = await CryptozuyB3M6l.addTocardType.call(uint1O0NdQ, uintafnr2wY, uinthf9EVQl, uintgEw9AM, uintyfaICMp, {from: accounts[2]});
//		const boolLnrSRM = await CryptozuyB3M6l.loadNewCardType.call(uintRv4PgM3, stringdOkHvwX, stringklZY8zK, uintkzqyhI5, uintvJaQoG9, uintyXGVZQH, uintAO5cw8q, uintHHEk1P, uintGNJwCg5, {from: accounts[0]});

		assert.equal(boolARrQDti, true)
		await expect(CryptozuyB3M6l.buyCard.call(uintj6JjoyB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYp9HhKR = await Cryptoz.new({from: accounts[4]});
		const addressJnBpgG4 = accounts[3]
		const addressRygA4gb = "0x0000000000000000000000000000000000000001"
		const uintv3mCyuw = await CryptozYp9HhKR.getTimeToDailyBonus.call(addressJnBpgG4, {from: accounts[4]});
		const addressmg2DK5i = await CryptozYp9HhKR.initialize.call(addressRygA4gb, {from: accounts[4]});

		assert.equal(uintv3mCyuw, BigInt("1630204018"))
	});

	it('test for Cryptoz', async () => {
		const CryptozfZvBoET = await Cryptoz.new({from: accounts[3]});
		const stringoVRl7Wq = await CryptozfZvBoET.name.call({from: accounts[3]});
		const uint256UM07sHS = await CryptozfZvBoET.totalSupply.call({from: accounts[1]});
		const uint256utDbY4A = await CryptozfZvBoET.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringoVRl7Wq, "Cryptoz Cards")
		assert.equal(uint256UM07sHS, BigInt("0"))
		assert.equal(uint256utDbY4A, BigInt("0"))
	});

	it('test for Cryptoz', async () => {
		const CryptozuyB3M6l = await Cryptoz.new({from: accounts[2]});
		const uintbqzI2n6 = BigInt("1294")
		const uinteHuF61 = BigInt("234")
		const uintTxRmzj = BigInt("1760")
		const uintoM4bSr = BigInt("179")
		const uintKs7Wue4 = BigInt("42")
		const uintXPda0Rb = BigInt("151")
		const stringexccZXz = "mBpvVV2l2Y5PmdyaRzjxmQ7BM"
		const stringPqI5cOZ = "VCuSiuv03XdMjfJbqPf7QuMSoGd3FIrCpFhAMWiqdFym5NsK3lCkCMWx628umWNF5g47Jt9EboLKQSDl8H"
		const uintZ0o0BT = BigInt("98")
		const uintLyEnqRY = BigInt("9")
		const uintYWIgIiC = BigInt("186")
		const uintNAyocVY = BigInt("998")
		const uintT4wwC2Q = BigInt("1249")
		const uintsTIMxTh = BigInt("1208")
		const boolARrQDti = await CryptozuyB3M6l.loadNewCardType.call(uintZ0o0BT, stringPqI5cOZ, stringexccZXz, uintXPda0Rb, uintKs7Wue4, uintoM4bSr, uintTxRmzj, uinteHuF61, uintbqzI2n6, {from: accounts[2]});
//		const boolyFymDB = await CryptozuyB3M6l.addTocardType.call(uintsTIMxTh, uintT4wwC2Q, uintNAyocVY, uintYWIgIiC, uintLyEnqRY, {from: accounts[2]});

		assert.equal(boolARrQDti, true)
		await expect(CryptozuyB3M6l.addTocardType.call(uintsTIMxTh, uintT4wwC2Q, uintNAyocVY, uintYWIgIiC, uintLyEnqRY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})