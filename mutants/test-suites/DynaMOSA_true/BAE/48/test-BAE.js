const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressloVjzAE = accounts[2]
		const BAEFGacROm = await BAE.new(addressloVjzAE, {from: accounts[5]});
		const uintIVTqxp1 = BigInt("1841")
		const uintwQQvnY = BigInt("761")
		const uintdrhDXHW = BigInt("726")
		const uintqpU2AXH = BigInt("1505")
		const uintfXr2La1 = BigInt("927")
		const uintUN2tBOg = BigInt("1719")
		const uintMAG0Dwg = BigInt("1329")
		const uintD8osaUU = BigInt("1791")
		const uintDa9P6M = BigInt("1413")
		const uintZYK8M6w = BigInt("913")
//		const uint256ANtiqnj = await BAEFGacROm.createAuction.call(uintqpU2AXH, uintdrhDXHW, uintwQQvnY, uintIVTqxp1, {from: accounts[0]});
//		const uint256Jk7wiZ9 = await BAEFGacROm.concludeAuction.call(uintfXr2La1, {from: accounts[4]});
//		const uint256e0pDWmm = await BAEFGacROm.bid.call(uintUN2tBOg, {from: accounts[1]});
//		const uint256KrkMmw5 = await BAEFGacROm.resetAuction.call(uintDa9P6M, uintD8osaUU, uintMAG0Dwg, {from: accounts[4]});
//		const uint256ySvTKvG = await BAEFGacROm.setAuctionFee.call(uintZYK8M6w, {from: accounts[0]});

		await expect(BAEFGacROm.createAuction.call(uintqpU2AXH, uintdrhDXHW, uintwQQvnY, uintIVTqxp1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresssSt7zW1 = accounts[5]
		const BAEHme6fQ5 = await BAE.new(addresssSt7zW1, {from: accounts[2]});
		const uintpw0GDf = BigInt("686")
		const uintlxQklnU = BigInt("713")
		const uinthW7UxB = BigInt("1207")
		const uintMr0eQw = BigInt("906")
		const uintoSFBuaL = BigInt("1427")
//		const uint256qdeux6E = await BAEHme6fQ5.buy.call(uintpw0GDf, {from: accounts[2]});
//		const uint256NYUWG3J = await BAEHme6fQ5.changePrintFee.call(uintlxQklnU, {from: accounts[2]});
//		const uint256PgAyYHy = await BAEHme6fQ5.setAuctionFee.call(uinthW7UxB, {from: accounts[3]});
//		const uint256tFjrZ3h = await BAEHme6fQ5.buy.call(uintMr0eQw, {from: accounts[4]});
//		const uint256Tng71tJ = await BAEHme6fQ5.setAuctionFee.call(uintoSFBuaL, {from: accounts[3]});

		await expect(BAEHme6fQ5.buy.call(uintpw0GDf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressPIsfYa0 = accounts[4]
		const BAEc8wCsgP = await BAE.new(addressPIsfYa0, {from: "0x0000000000000000000000000000000000000001"});
		const uintGgaGD63 = BigInt("1470")
		const uintTtjd8tN = BigInt("677")
		const uint256i9SK24i = await BAEc8wCsgP.setAuctionFee.call(uintGgaGD63, {from: accounts[2]});
		const uint256Wfm4cX = await BAEc8wCsgP.bid.call(uintTtjd8tN, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addressMrKl6Sp = accounts[4]
		const BAEUu4sehI = await BAE.new(addressMrKl6Sp, {from: accounts[0]});
		const uintkUNPGT4 = BigInt("210")
		const uintUdxilik = BigInt("1965")
		const uintHoCLSk = BigInt("1721")
		const uintQwdbIGw = BigInt("845")
		const uintXVhQgi = BigInt("1332")
		const uintvlFv16n = BigInt("468")
		const uintRM8KkNd = BigInt("69")
		const uintiGjHtuf = BigInt("1538")
//		const uint256JwNpgCG = await BAEUu4sehI.concludeAuction.call(uintkUNPGT4, {from: accounts[2]});
//		const uint256NQXCyKs = await BAEUu4sehI.setAuctionFee.call(uintUdxilik, {from: accounts[4]});
//		const uint256Mf6M2M = await BAEUu4sehI.resetAuction.call(uintXVhQgi, uintQwdbIGw, uintHoCLSk, {from: accounts[1]});
//		const uint256NvClZ7 = await BAEUu4sehI.resetAuction.call(uintiGjHtuf, uintRM8KkNd, uintvlFv16n, {from: accounts[3]});

		await expect(BAEUu4sehI.concludeAuction.call(uintkUNPGT4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresslmfIA24 = accounts[0]
		const BAEUhJK2lB = await BAE.new(addresslmfIA24, {from: accounts[3]});
		const uintTR8rBT = BigInt("1911")
		const uintzfpDoUk = BigInt("1359")
		const uintCvI8SUx = BigInt("1019")
		const uintEvMTVD = BigInt("747")
		const uintiebPIDk = BigInt("1886")
//		const uint256i5eIwqk = await BAEUhJK2lB.bid.call(uintTR8rBT, {from: accounts[2]});
//		const uint256Ky6EVxH = await BAEUhJK2lB.resetAuction.call(uintEvMTVD, uintCvI8SUx, uintzfpDoUk, {from: accounts[4]});
//		const uint256qs4TIvF = await BAEUhJK2lB.buy.call(uintiebPIDk, {from: accounts[5]});

		await expect(BAEUhJK2lB.bid.call(uintTR8rBT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressxDFZgL3 = accounts[2]
		const BAEFL5n9W8 = await BAE.new(addressxDFZgL3, {from: accounts[0]});
		const uintLQqAQWq = BigInt("484")
		const uintg0hXixQ = BigInt("1418")
		const uintdl1pHXu = BigInt("1681")
		const uintVYYlZYc = BigInt("644")
		const uintrKPQYmI = BigInt("1521")
//		const uint256u2IihqP = await BAEFL5n9W8.resetAuction.call(uintdl1pHXu, uintg0hXixQ, uintLQqAQWq, {from: accounts[4]});
//		const uint256hCyrDs = await BAEFL5n9W8.buy.call(uintVYYlZYc, {from: accounts[3]});
//		const uint256VeFDdTb = await BAEFL5n9W8.changePrintFee.call(uintrKPQYmI, {from: accounts[4]});

		await expect(BAEFL5n9W8.resetAuction.call(uintdl1pHXu, uintg0hXixQ, uintLQqAQWq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressghkc3Dn = accounts[4]
		const BAE5lbfzN = await BAE.new(addressghkc3Dn, {from: accounts[3]});
		const uintbhSgcuU = BigInt("1932")
		const uintWm3qkYp = BigInt("1717")
		const uintJpaQES7 = BigInt("1914")
		const uintkTbj6wa = BigInt("1751")
		const uintf9WLs6O = BigInt("1930")
//		const uint256qwWnPrf = await BAE5lbfzN.setAuctionFee.call(uintbhSgcuU, {from: accounts[1]});
//		const uint256r61t7IO = await BAE5lbfzN.resetAuction.call(uintkTbj6wa, uintJpaQES7, uintWm3qkYp, {from: accounts[2]});
//		const uint256DB00Wz9 = await BAE5lbfzN.setAuctionFee.call(uintf9WLs6O, {from: accounts[2]});

		await expect(BAE5lbfzN.setAuctionFee.call(uintbhSgcuU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})