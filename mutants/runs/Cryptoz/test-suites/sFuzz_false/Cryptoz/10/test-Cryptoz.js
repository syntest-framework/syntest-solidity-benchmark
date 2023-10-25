const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozpknug4N = await Cryptoz.new({from: accounts[3]});
		const uintz54PdZV = BigInt("1089")
		const uintNqHUF1 = BigInt("25")
		const uint256Ms2E6tT = await Cryptozpknug4N.sacrifice.call(uintz54PdZV, {from: accounts[4]});
		await Cryptozpknug4N.withdraw.call({from: accounts[1]});
		await Cryptozpknug4N.getOwnedCard.call(uintNqHUF1, {from: accounts[1]});
		await Cryptozpknug4N.getBonusBoosters.call({from: accounts[2]});
		await Cryptozpknug4N.getTokensByRarity.call({from: accounts[3]});

		await expect(Cryptozpknug4N.sacrifice.call(uintz54PdZV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozbg6PF8 = await Cryptoz.new({from: accounts[1]});
		const uintcyqUb9 = BigInt("392")
		const uintsrSFQr9 = BigInt("920")
		await Cryptozbg6PF8.getOwnedCard.call(uintcyqUb9, {from: accounts[3]});
		await Cryptozbg6PF8.getTokensByRarity.call({from: accounts[2]});
		const uint256beCZLnC = await Cryptozbg6PF8.tokenByIndex.call(uintsrSFQr9, {from: accounts[1]});

		await expect(Cryptozbg6PF8.getOwnedCard.call(uintcyqUb9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz8M0VPc = await Cryptoz.new({from: accounts[0]});
		const uintBKRNORV = BigInt("193")
		const uintRC8BfG = BigInt("1399")
		const addressjMUXIxP = accounts[0]
		const uintqdhqwLr = BigInt("446")
		const addressXR7L4rC = accounts[4]
		const uintx3g3ZeL = BigInt("5")
		const uint256NbyOlKb = await Cryptoz8M0VPc.tokenByIndex.call(uintBKRNORV, {from: accounts[2]});
		const stringloNsNDS = await Cryptoz8M0VPc.tokenURI.call(uintRC8BfG, {from: accounts[1]});
		const addressWFT1bsR = await Cryptoz8M0VPc.initialize.call(addressjMUXIxP, {from: accounts[0]});
		const uint2567zhw6u = await Cryptoz8M0VPc.tokenOfOwnerByIndex.call(addressXR7L4rC, uintqdhqwLr, {from: accounts[5]});
		const boolOktCGq = await Cryptoz8M0VPc.buyCard.call(uintx3g3ZeL, {from: accounts[1]});

		await expect(Cryptoz8M0VPc.tokenByIndex.call(uintBKRNORV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozKe9owk9 = await Cryptoz.new({from: accounts[3]});
		const uintsTQle9V = BigInt("174")
		const uintcs0hy1U = BigInt("171")
		const uintsmIlDR = BigInt("1090")
		const uintf1LbPjm = BigInt("270")
		const uintntSguyE = BigInt("537")
		const uintTOeSP9v = BigInt("1080")
		const addresso29jnvA = accounts[1]
		const boolMHxRZd1 = await CryptozKe9owk9.addTocardType.call(uintntSguyE, uintf1LbPjm, uintsmIlDR, uintcs0hy1U, uintsTQle9V, {from: accounts[0]});
		await CryptozKe9owk9.withdraw.call({from: accounts[0]});
		const uint256XOTkKI = await CryptozKe9owk9.tokenOfOwnerByIndex.call(addresso29jnvA, uintTOeSP9v, {from: accounts[4]});

		await expect(CryptozKe9owk9.addTocardType.call(uintntSguyE, uintf1LbPjm, uintsmIlDR, uintcs0hy1U, uintsTQle9V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNQx2MHB = await Cryptoz.new({from: accounts[0]});
		const addressvjegaoE = "0x0000000000000000000000000000000000000001"
		const addressnAZ9j9C = accounts[3]
		const uintiZNpud = BigInt("927")
		const addressEmzkUEH = accounts[4]
		const addressSkHJQhg = accounts[0]
		const addressrckZoHi = await CryptozNQx2MHB.linkMySponsor.call(addressvjegaoE, {from: accounts[4]});
		await CryptozNQx2MHB.f.call({from: accounts[3]});
		const addressdUeRJxC = await CryptozNQx2MHB.linkMySponsor.call(addressnAZ9j9C, {from: accounts[3]});
		const addressJBmAZX5 = await CryptozNQx2MHB.transferFrom.call(addressSkHJQhg, addressEmzkUEH, uintiZNpud, {from: accounts[4]});

		await expect(CryptozNQx2MHB.linkMySponsor.call(addressvjegaoE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozvZkFndl = await Cryptoz.new({from: accounts[1]});
		const uintR2tpgZt = BigInt("1337")
		const addressAgVren9 = accounts[3]
		const addressmvDbv7h = "0x0000000000000000000000000000000000000001"
		const uintAwMePJF = BigInt("1022")
		const addressdeQseE6 = await CryptozvZkFndl.transferFrom.call(addressmvDbv7h, addressAgVren9, uintR2tpgZt, {from: accounts[4]});
		const uint32DAyoGpJ = await CryptozvZkFndl.isValidCard.call(uintAwMePJF, {from: accounts[1]});
		await CryptozvZkFndl.getBonusBoosters.call({from: accounts[1]});

		await expect(CryptozvZkFndl.transferFrom.call(addressmvDbv7h, addressAgVren9, uintR2tpgZt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const addressl7bcuKz = accounts[1]
		const uintwYoWDLI = BigInt("577")
		const uintvhcAb0Y = BigInt("1127")
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressl7bcuKz, {from: accounts[1]});
		const uint32BeA92Ak = await CryptozYuaWCNw.getFreeCard.call(uintwYoWDLI, {from: accounts[0]});
		await CryptozYuaWCNw.buyBoosterCardAndOpen.call({from: accounts[3]});
		const uint256BOVMTQk = await CryptozYuaWCNw.tokenByIndex.call(uintvhcAb0Y, {from: accounts[5]});

		assert.equal(uintLvosH3, BigInt("1630204055"))
		await expect(CryptozYuaWCNw.getFreeCard.call(uintwYoWDLI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz8tHm29 = await Cryptoz.new({from: accounts[0]});
		const uintfvBvFDX = BigInt("252")
		await Cryptozz8tHm29.getTokensByRarity.call({from: accounts[1]});
		await Cryptozz8tHm29.f.call({from: accounts[3]});
		const boolTXSLi3c = await Cryptozz8tHm29.buyBoosterCard.call(uintfvBvFDX, {from: accounts[1]});

		await expect(Cryptozz8tHm29.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const addresslj2iGg = accounts[1]
		const uintUdye8gY = BigInt("18")
		const uintcqWVq7 = BigInt("577")
		const uintkoFkW7b = BigInt("1127")
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addresslj2iGg, {from: accounts[1]});
		const boolOMZKqMb = await CryptozYuaWCNw.buyBoosterCard.call(uintUdye8gY, {from: accounts[0]});
		const uint32BeA92Ak = await CryptozYuaWCNw.getFreeCard.call(uintcqWVq7, {from: accounts[0]});
		await CryptozYuaWCNw.buyBoosterCardAndOpen.call({from: accounts[3]});
		const uint256BOVMTQk = await CryptozYuaWCNw.tokenByIndex.call(uintkoFkW7b, {from: accounts[5]});

		assert.equal(uintLvosH3, BigInt("1630204083"))
		await expect(CryptozYuaWCNw.buyBoosterCard.call(uintUdye8gY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNx8BLT4 = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintejiQVT = BigInt("635")
		const uintoA53Tvl = BigInt("699")
		const addressvozBljh = accounts[4]
		const addressThC5Anb = accounts[0]
		await CryptozNx8BLT4.buyBoosterCardAndOpen.call({from: "0x0000000000000000000000000000000000000001"});
		const stringWXHSgGx = await CryptozNx8BLT4.tokenURI.call(uintejiQVT, {from: accounts[4]});
		const addressAofS3Fp = await CryptozNx8BLT4.transferFrom.call(addressThC5Anb, addressvozBljh, uintoA53Tvl, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const address19kCmN = accounts[1]
		const uintvWadikf = BigInt("577")
		const uintyevOAuz = BigInt("1127")
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(address19kCmN, {from: accounts[1]});
		const stringJelsLyB = await CryptozYuaWCNw.symbol.call({from: accounts[2]});
		const uint32BeA92Ak = await CryptozYuaWCNw.getFreeCard.call(uintvWadikf, {from: accounts[0]});
		const uint256BOVMTQk = await CryptozYuaWCNw.tokenByIndex.call(uintyevOAuz, {from: accounts[5]});

		assert.equal(stringJelsLyB, "Cryptoz")
		assert.equal(uintLvosH3, BigInt("1630204081"))
		await expect(CryptozYuaWCNw.getFreeCard.call(uintvWadikf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const uintPf9EXv3 = BigInt("1616")
		const uintXtwpMs = BigInt("1575")
		const uint6ugwUu = BigInt("76")
		const uintp00OCSE = BigInt("96")
		const uintCAcomnb = BigInt("238")
		const uintQG0FnrW = BigInt("160")
		const stringCPIDRlM = "Y7kaVldvDwGxAs7k166Mb5vSoPIuNayKxeaRz8fUUHnoS3TzSQVaDUYc4C118mbd6tBCE73Pq4V3hgzf1mbO1kDPPoH8kq"
		const stringsDc0jke = "YiEsrLvM4JPooF6ZGEETrXLHFJJAR9sK94iJSYBPNKOP1iWpynABT3WzhdG6uMdlUUhngLGj46L"
		const uintMLqg5RF = BigInt("175")
		const addressnwrSKb = accounts[2]
		const uintichVls8 = BigInt("576")
		const uintjkWB8Ja = BigInt("1127")
		const booluhPtgL = await CryptozYuaWCNw.loadNewCardType.call(uintMLqg5RF, stringsDc0jke, stringCPIDRlM, uintQG0FnrW, uintCAcomnb, uintp00OCSE, uint6ugwUu, uintXtwpMs, uintPf9EXv3, {from: accounts[4]});
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressnwrSKb, {from: accounts[1]});
		const uint32BeA92Ak = await CryptozYuaWCNw.getFreeCard.call(uintichVls8, {from: accounts[0]});
		const uint256O1VLgil = await CryptozYuaWCNw.totalSupply.call({from: accounts[3]});
		const uint256BOVMTQk = await CryptozYuaWCNw.tokenByIndex.call(uintjkWB8Ja, {from: accounts[5]});

		assert.equal(booluhPtgL, true)
		assert.equal(uintLvosH3, BigInt("1630204073"))
		await expect(CryptozYuaWCNw.getFreeCard.call(uintichVls8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozdEBHYgF = await Cryptoz.new({from: accounts[0]});
		const uintYFgmufR = BigInt("1683")
		const uintrtBWUy = BigInt("667")
		const uint32aYmcbu = await CryptozdEBHYgF.isValidCard.call(uintYFgmufR, {from: accounts[4]});
		await CryptozdEBHYgF.buyBoosterCardAndOpen.call({from: accounts[2]});
		await CryptozdEBHYgF.getBonusBoosters.call({from: accounts[0]});
		const boolAzKRHKA = await CryptozdEBHYgF.buyBoosterCard.call(uintrtBWUy, {from: accounts[2]});

		await expect(CryptozdEBHYgF.isValidCard.call(uintYFgmufR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const addressG6R2TqE = accounts[1]
		const uintu8yGrLi = BigInt("639")
		const uintzQXWRb = BigInt("288")
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressG6R2TqE, {from: accounts[1]});
		await CryptozYuaWCNw.getBonusBoosters.call({from: accounts[1]});
		const uint32BeA92Ak = await CryptozYuaWCNw.getFreeCard.call(uintu8yGrLi, {from: accounts[0]});
		const boolRkYjhJJ = await CryptozYuaWCNw.buyBoosterCard.call(uintzQXWRb, {from: accounts[1]});

		assert.equal(uintLvosH3, BigInt("1630204074"))
		await expect(CryptozYuaWCNw.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const addresszqJU9v8 = accounts[3]
		const uintKMYAe3 = BigInt("1885")
		const addresshs9aP9t = accounts[3]
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addresszqJU9v8, {from: accounts[1]});
		const uint256aQN5aCx = await CryptozYuaWCNw.tokenOfOwnerByIndex.call(addresshs9aP9t, uintKMYAe3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintLvosH3, BigInt("1630204063"))
		await expect(CryptozYuaWCNw.tokenOfOwnerByIndex.call(addresshs9aP9t, uintKMYAe3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const addressAgANQ5k = accounts[3]
		const addressbr44oM = accounts[4]
		const uintRtfrLUp = BigInt("1795")
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressAgANQ5k, {from: accounts[1]});
		const addressnyIQgiw = await CryptozYuaWCNw.initialize.call(addressbr44oM, {from: accounts[4]});
		const uint256jsd8vFZ = await CryptozYuaWCNw.sacrifice.call(uintRtfrLUp, {from: accounts[4]});

		assert.equal(uintLvosH3, BigInt("1630204076"))
		await expect(CryptozYuaWCNw.sacrifice.call(uintRtfrLUp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz63KYW7 = await Cryptoz.new({from: accounts[5]});
		const uintRE862vY = BigInt("1893")
		const addressrGnGozT = accounts[3]
		const addresshjsuQZE = accounts[5]
		await Cryptoz63KYW7.buyBoosterCardAndOpen.call({from: "0x0000000000000000000000000000000000000001"});
		const addressyHRbSq = await Cryptoz63KYW7.transferFrom.call(addresshjsuQZE, addressrGnGozT, uintRE862vY, {from: accounts[2]});
		await Cryptoz63KYW7.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await Cryptoz63KYW7.getBonusBoosters.call({from: accounts[4]});

		await expect(Cryptoz63KYW7.buyBoosterCardAndOpen.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const addressbCxO1Um = accounts[5]
		const addressMNms12 = accounts[3]
		const uint256arrayhjXCafJ = await CryptozYuaWCNw.tokensOfOwner.call(addressbCxO1Um, {from: accounts[1]});
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressMNms12, {from: accounts[1]});

		assert.equal(uint256arrayhjXCafJ, BigInt(""))
		assert.equal(uintLvosH3, BigInt("1630204086"))
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const addressoJdmYWb = accounts[3]
		const addressLxLc2dA = accounts[3]
		const uintbIj6LFu = BigInt("1316")
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressoJdmYWb, {from: accounts[1]});
		const uintu1StypD = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressLxLc2dA, {from: accounts[0]});
		const stringIYdGOcO = await CryptozYuaWCNw.tokenURI.call(uintbIj6LFu, {from: accounts[3]});

		assert.equal(stringIYdGOcO, "https://cryptoz.cards/data/1316")
		assert.equal(uintLvosH3, BigInt("1630204068"))
		assert.equal(uintu1StypD, BigInt("1630204068"))
	});

	it('test for Cryptoz', async () => {
		const CryptozYuaWCNw = await Cryptoz.new({from: accounts[4]});
		const uintwxClY6B = BigInt("699")
		const addressRsTBdDP = accounts[3]
		const boolBk8zf8T = await CryptozYuaWCNw.openBoosterCard.call(uintwxClY6B, {from: "0x0000000000000000000000000000000000000001"});
		const uintLvosH3 = await CryptozYuaWCNw.getTimeToDailyBonus.call(addressRsTBdDP, {from: accounts[1]});
		await CryptozYuaWCNw.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"});
		const stringb3ULqAB = await CryptozYuaWCNw.symbol.call({from: accounts[2]});

		await expect(CryptozYuaWCNw.openBoosterCard.call(uintwxClY6B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozbg6PF8 = await Cryptoz.new({from: accounts[1]});
		const uintaDx2NVu = BigInt("920")
		await Cryptozbg6PF8.getBonusBoosters.call({from: accounts[2]});
		const stringEDZsB7c = await Cryptozbg6PF8.name.call({from: accounts[2]});
		const uint256beCZLnC = await Cryptozbg6PF8.tokenByIndex.call(uintaDx2NVu, {from: accounts[1]});

		await expect(Cryptozbg6PF8.getBonusBoosters.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})