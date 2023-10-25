const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOzQJ2U6x = await FrogDAO.new({from: accounts[0]});
		const uintRCYzLnJ = BigInt("347")
		const addressbfRWxwH = accounts[5]
		const uintJ0gVCn = BigInt("1098")
		const uintyQE8Vbd = BigInt("863")
		const booleJHOPVu = await FrogDAOzQJ2U6x.transfer.call(addressbfRWxwH, uintRCYzLnJ, {from: accounts[2]});
		const uintVJaQtH = await FrogDAOzQJ2U6x.safeDiv.call(uintyQE8Vbd, uintJ0gVCn, {from: accounts[1]});

		await expect(FrogDAOzQJ2U6x.transfer.call(addressbfRWxwH, uintRCYzLnJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOs3QHkHC = await FrogDAO.new({from: accounts[1]});
		const uintsKxnOKd = BigInt("1045")
		const uintmyDHdsZ = BigInt("954")
		const uintaIpY43y = BigInt("241")
		const addressHs10FPD = accounts[1]
		const uintKbenTGH = await FrogDAOs3QHkHC.safeMul.call(uintmyDHdsZ, uintsKxnOKd, {from: accounts[0]});
		const boolobcqGni = await FrogDAOs3QHkHC.approve.call(addressHs10FPD, uintaIpY43y, {from: accounts[2]});

		assert.equal(boolobcqGni, true)
		assert.equal(uintKbenTGH, BigInt("996930"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOEOtced = await FrogDAO.new({from: accounts[5]});
		const uintgLSqpt = BigInt("48")
		const uintbPF69iP = BigInt("209")
		const uintcv7LH9G = BigInt("1424")
		const uinttvmvfQo = BigInt("692")
		const uintzgrl2pS = BigInt("1304")
		const addressF8wWoOK = accounts[3]
		const addressk1LeHk1 = accounts[0]
		const uintS1ZRSFk = BigInt("1663")
		const uintWYUE76B = BigInt("865")
		const uintx47Tulc = await FrogDAOEOtced.safeDiv.call(uintbPF69iP, uintgLSqpt, {from: accounts[4]});
		const uintBS4MbG2 = await FrogDAOEOtced.safeMul.call(uinttvmvfQo, uintcv7LH9G, {from: accounts[4]});
		const boolrZCgTod = await FrogDAOEOtced.transferFrom.call(addressk1LeHk1, addressF8wWoOK, uintzgrl2pS, {from: accounts[1]});
		const uintaDZa5A = await FrogDAOEOtced.safeMul.call(uintWYUE76B, uintS1ZRSFk, {from: accounts[0]});

		assert.equal(uintBS4MbG2, BigInt("985408"))
		assert.equal(uintx47Tulc, BigInt("4"))
		await expect(FrogDAOEOtced.transferFrom.call(addressk1LeHk1, addressF8wWoOK, uintzgrl2pS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOtw3nXAA = await FrogDAO.new({from: accounts[4]});
		const uintENkqDng = BigInt("1382")
		const uintzpJY58U = BigInt("1034")
		const addressfSHUyfV = accounts[1]
		const addresslL3nCup = accounts[4]
		const uintaamJW5I = await FrogDAOtw3nXAA.safeDiv.call(uintzpJY58U, uintENkqDng, {from: accounts[0]});
		const uintCZpZki9 = await FrogDAOtw3nXAA.allowance.call(addresslL3nCup, addressfSHUyfV, {from: accounts[4]});

		assert.equal(uintCZpZki9, BigInt("0"))
		assert.equal(uintaamJW5I, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOXXf8ci5 = await FrogDAO.new({from: accounts[1]});
		const uintz5QfFL4 = BigInt("1870")
		const uintgLayDUS = BigInt("161")
		const uintQZ1qGFW = BigInt("1959")
		const addressgbiQILp = accounts[3]
		const uints4gjCYl = await FrogDAOXXf8ci5.safeAdd.call(uintgLayDUS, uintz5QfFL4, {from: accounts[0]});
		const bool3URYXR = await FrogDAOXXf8ci5.transfer.call(addressgbiQILp, uintQZ1qGFW, {from: accounts[4]});

		assert.equal(uints4gjCYl, BigInt("2031"))
		await expect(FrogDAOXXf8ci5.transfer.call(addressgbiQILp, uintQZ1qGFW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOlpQf6s9 = await FrogDAO.new({from: accounts[4]});
		const uinthsdpTyw = BigInt("76")
		const addressl34NCEc = accounts[3]
		const addressKlNe0Ip = accounts[2]
		const uinth3i5x1P = BigInt("1473")
		const uintoGfmOYq = BigInt("823")
		const uintao7f3w = await FrogDAOlpQf6s9.totalSupply.call({from: accounts[3]});
		const boolhSWu0a1 = await FrogDAOlpQf6s9.transferFrom.call(addressKlNe0Ip, addressl34NCEc, uinthsdpTyw, {from: "0x0000000000000000000000000000000000000001"});
		const uinto7X5FyG = await FrogDAOlpQf6s9.safeSub.call(uintoGfmOYq, uinth3i5x1P, {from: accounts[5]});

		assert.equal(uintao7f3w, BigInt("1000000000000000000000000"))
		await expect(FrogDAOlpQf6s9.transferFrom.call(addressKlNe0Ip, addressl34NCEc, uinthsdpTyw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOXXf8ci5 = await FrogDAO.new({from: accounts[1]});
		const uintVUXMWAA = BigInt("1870")
		const uintLLEFUJf = BigInt("161")
		const addressPt3FW1G = accounts[2]
		const uintYqQ5Jmw = BigInt("1959")
		const addressUMCbkL = accounts[4]
		const uints4gjCYl = await FrogDAOXXf8ci5.safeAdd.call(uintLLEFUJf, uintVUXMWAA, {from: accounts[0]});
		const uintQyFP5q6 = await FrogDAOXXf8ci5.balanceOf.call(addressPt3FW1G, {from: accounts[2]});
		const bool3URYXR = await FrogDAOXXf8ci5.transfer.call(addressUMCbkL, uintYqQ5Jmw, {from: accounts[4]});
		const uintiR4kTCz = await FrogDAOXXf8ci5.totalSupply.call({from: accounts[4]});

		assert.equal(uintQyFP5q6, BigInt("0"))
		assert.equal(uints4gjCYl, BigInt("2031"))
		await expect(FrogDAOXXf8ci5.transfer.call(addressUMCbkL, uintYqQ5Jmw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOCDrdTU4 = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNcT8HG9 = "0x0000000000000000000000000000000000000001"
		const addressKY6g17a = accounts[1]
		const addressG6wD3ua = accounts[3]
		const uintkmRdZMB = BigInt("1310")
		const uintqbsQVYL = BigInt("1344")
		const uintp4lkXDM = BigInt("1935")
		const addressU5xNhCw = accounts[5]
		const uintGQPpmH = await FrogDAOCDrdTU4.totalSupply.call({from: accounts[0]});
		const uintmEx7nq6 = await FrogDAOCDrdTU4.balanceOf.call(addressNcT8HG9, {from: accounts[3]});
		const uintZfqu2k9 = await FrogDAOCDrdTU4.allowance.call(addressG6wD3ua, addressKY6g17a, {from: accounts[0]});
		const uintTQvzmD = await FrogDAOCDrdTU4.safeSub.call(uintqbsQVYL, uintkmRdZMB, {from: accounts[5]});
		const boolpCi5zjV = await FrogDAOCDrdTU4.approve.call(addressU5xNhCw, uintp4lkXDM, {from: accounts[1]});
	});
})