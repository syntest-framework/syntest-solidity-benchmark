const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressoIVHGnb = accounts[2]
		const BAEb2KNlab = await BAE.new(addressoIVHGnb, {from: accounts[3]});
		const uintpKyyvM6 = BigInt("144")
		const uintYGNKOXo = BigInt("541")
		const uintlDaGZf = BigInt("984")
		const uintgWrRo7 = BigInt("1916")
		const uintZvEHCQ = BigInt("1648")
		const uintc9pEXaM = BigInt("201")
		const uintLFZFgAK = BigInt("499")
		const uintq6QdlHD = BigInt("1810")
		const uintjKjfg6a = BigInt("118")
		const uintjXTpdA = BigInt("1466")
		const uintzcOcgUk = BigInt("535")
		const uint6eHtUx = BigInt("1429")
		const uinttlUNtWe = BigInt("1418")
		const uint6g2gGM = BigInt("1451")
		const uintYoVSyO4 = BigInt("1746")
		const uintsI7Awxa = BigInt("1556")
		const uintGyrBcp8 = BigInt("1750")
//		const uint256rGhJf3 = await BAEb2KNlab.concludeAuction.call(uintpKyyvM6, {from: accounts[2]});
//		const uint256AsHHZvz = await BAEb2KNlab.createAuction.call(uintZvEHCQ, uintgWrRo7, uintlDaGZf, uintYGNKOXo, {from: accounts[1]});
//		const uint256zAASsuf = await BAEb2KNlab.createAuction.call(uintjKjfg6a, uintq6QdlHD, uintLFZFgAK, uintc9pEXaM, {from: accounts[1]});
//		const uint256d569vN = await BAEb2KNlab.bid.call(uintjXTpdA, {from: accounts[1]});
//		const uint256eMCI6rC = await BAEb2KNlab.resetAuction.call(uinttlUNtWe, uint6eHtUx, uintzcOcgUk, {from: accounts[0]});
//		const uint256OBh4m5s = await BAEb2KNlab.createAuction.call(uintGyrBcp8, uintsI7Awxa, uintYoVSyO4, uint6g2gGM, {from: accounts[0]});

		await expect(BAEb2KNlab.concludeAuction.call(uintpKyyvM6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressI3tLlC8 = accounts[5]
		const BAEx95hLi5 = await BAE.new(addressI3tLlC8, {from: accounts[4]});
		const uintAEOIO0w = BigInt("1965")
		const uintSJubroS = BigInt("1167")
		const uintCwisaSv = BigInt("1066")
//		const uint256JElfgXa = await BAEx95hLi5.buy.call(uintAEOIO0w, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256v2e7rp = await BAEx95hLi5.setAuctionFee.call(uintSJubroS, {from: accounts[2]});
//		const uint256UTmmEF5 = await BAEx95hLi5.buy.call(uintCwisaSv, {from: accounts[4]});

		await expect(BAEx95hLi5.buy.call(uintAEOIO0w, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressHYdDzqF = accounts[0]
		const BAErnUekD = await BAE.new(addressHYdDzqF, {from: accounts[4]});
		const uintJekPsvP = BigInt("162")
		const uintHpJGRr2 = BigInt("1350")
		const uintlkTju4J = BigInt("1905")
		const uintqvJfkFZ = BigInt("1316")
		const uintOkeRK3V = BigInt("547")
		const uintUWVtw9A = BigInt("1418")
		const uintZtr3oSx = BigInt("403")
//		const uint256m26PgWA = await BAErnUekD.resetAuction.call(uintlkTju4J, uintHpJGRr2, uintJekPsvP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256WQfIO8b = await BAErnUekD.createAuction.call(uintZtr3oSx, uintUWVtw9A, uintOkeRK3V, uintqvJfkFZ, {from: accounts[2]});

		await expect(BAErnUekD.resetAuction.call(uintlkTju4J, uintHpJGRr2, uintJekPsvP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressqDykQeg = accounts[4]
		const BAEMzN1nq9 = await BAE.new(addressqDykQeg, {from: accounts[1]});
		const uintIYqlYOp = BigInt("1218")
		const uintFzaoGUz = BigInt("1757")
		const uintGCJsLls = BigInt("1419")
//		const uint256nKb0BC = await BAEMzN1nq9.setAuctionFee.call(uintIYqlYOp, {from: accounts[2]});
//		const uint256P9ippEy = await BAEMzN1nq9.bid.call(uintFzaoGUz, {from: accounts[4]});
//		const uint256tdtvhTe = await BAEMzN1nq9.concludeAuction.call(uintGCJsLls, {from: accounts[4]});

		await expect(BAEMzN1nq9.setAuctionFee.call(uintIYqlYOp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressDLGFJmY = accounts[1]
		const BAEppeIsg5 = await BAE.new(addressDLGFJmY, {from: accounts[4]});
		const uintP2ICFpQ = BigInt("1138")
		const uintvcrDA8 = BigInt("1715")
		const uintBKTuUkX = BigInt("901")
		const uintUcNPMcI = BigInt("1752")
		const uintBAnG1gQ = BigInt("1188")
//		const uint256IxsJZG = await BAEppeIsg5.bid.call(uintP2ICFpQ, {from: accounts[2]});
//		const uint256vfJ9UW = await BAEppeIsg5.buy.call(uintvcrDA8, {from: accounts[1]});
//		const uint256ecTSZgZ = await BAEppeIsg5.changePrintFee.call(uintBKTuUkX, {from: accounts[2]});
//		const uint256BMIgsBY = await BAEppeIsg5.bid.call(uintUcNPMcI, {from: accounts[0]});
//		const uint256OeaEDwV = await BAEppeIsg5.changePrintFee.call(uintBAnG1gQ, {from: accounts[5]});

		await expect(BAEppeIsg5.bid.call(uintP2ICFpQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressyD3uQf3 = "0x0000000000000000000000000000000000000001"
		const BAEL7hDa4P = await BAE.new(addressyD3uQf3, {from: accounts[4]});
		const uintrHER4g = BigInt("1176")
		const uintqAENAq4 = BigInt("1379")
		const uintVAOveI5 = BigInt("93")
		const uintP46C3CP = BigInt("1281")
		const uintjCt8qFW = BigInt("1853")
		const uintva12T8q = BigInt("500")
		const uintDpPKdFo = BigInt("926")
//		const uint256Rw0ESqm = await BAEL7hDa4P.createAuction.call(uintP46C3CP, uintVAOveI5, uintqAENAq4, uintrHER4g, {from: accounts[3]});
//		const uint256K90K3p = await BAEL7hDa4P.resetAuction.call(uintDpPKdFo, uintva12T8q, uintjCt8qFW, {from: accounts[5]});

		await expect(BAEL7hDa4P.createAuction.call(uintP46C3CP, uintVAOveI5, uintqAENAq4, uintrHER4g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressC2IvLPO = accounts[4]
		const BAEqJTDSk = await BAE.new(addressC2IvLPO, {from: "0x0000000000000000000000000000000000000001"});
		const uintj01H3oP = BigInt("1331")
		const uintDK9H7bz = BigInt("1399")
		const uintlfASq2H = BigInt("731")
		const uintogyFKhl = BigInt("940")
		const uintyynmGc5 = BigInt("977")
		const uintBvgv6W = BigInt("253")
		const uint256JEAHZqD = await BAEqJTDSk.setAuctionFee.call(uintj01H3oP, {from: accounts[0]});
		const uint256I3ocS4e = await BAEqJTDSk.bid.call(uintDK9H7bz, {from: accounts[4]});
		const uint256YzJLLJA = await BAEqJTDSk.createAuction.call(uintBvgv6W, uintyynmGc5, uintogyFKhl, uintlfASq2H, {from: accounts[3]});
	});
})