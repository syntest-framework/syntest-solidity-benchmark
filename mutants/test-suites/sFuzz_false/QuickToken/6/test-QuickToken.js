const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressD9m0DPe = accounts[0]
		const addressCnwb7Ek = accounts[4]
		const QuickTokenygxqgZm = await QuickToken.new(addressD9m0DPe, addressCnwb7Ek, {from: accounts[3]});
		const addressdkdygGD = accounts[4]
		const addressF6zUsbx = accounts[4]
		const uintQGPLa0M = BigInt("622")
		const addressNDOQzVA = accounts[0]
		const uintwWkimR = BigInt("1622")
		const addressEbIBMnh = accounts[3]
		const uintpeanbEu = await QuickTokenygxqgZm.allowance.call(addressF6zUsbx, addressdkdygGD, {from: accounts[1]});
//		const boolFDqjbrV = await QuickTokenygxqgZm.transfer.call(addressNDOQzVA, uintQGPLa0M, {from: accounts[1]});
//		const boolQb2tL3t = await QuickTokenygxqgZm.transfer.call(addressEbIBMnh, uintwWkimR, {from: accounts[3]});

		assert.equal(uintpeanbEu, BigInt("0"))
		await expect(QuickTokenygxqgZm.transfer.call(addressNDOQzVA, uintQGPLa0M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresszy1yNjc = accounts[4]
		const addressrgHmwbX = accounts[4]
		const QuickTokend7Vc9wX = await QuickToken.new(addresszy1yNjc, addressrgHmwbX, {from: "0x0000000000000000000000000000000000000001"});
		const uintXc4LY6h = BigInt("1409")
		const addressW2gmo3s = accounts[0]
		const uintg0DdwyZ = BigInt("127")
		const addressU6NXD1H = accounts[1]
		const uintJMymCAV = BigInt("1012")
		const addressrmKCNbS = accounts[2]
		const addressMpI1J0f = accounts[3]
		const addressPQDAyKY = accounts[4]
		const addressKjnRwa2 = await QuickTokend7Vc9wX.mint.call(addressW2gmo3s, uintXc4LY6h, {from: accounts[0]});
		const boolyFumQVJ = await QuickTokend7Vc9wX.approve.call(addressU6NXD1H, uintg0DdwyZ, {from: accounts[4]});
		const bool3VO61C = await QuickTokend7Vc9wX.transfer.call(addressrmKCNbS, uintJMymCAV, {from: accounts[4]});
		const uinttwfEw0 = await QuickTokend7Vc9wX.allowance.call(addressPQDAyKY, addressMpI1J0f, {from: accounts[4]});
	});

	it('test for QuickToken', async () => {
		const addressCoT44d = accounts[3]
		const addresstbwmq9W = accounts[3]
		const QuickTokennGxwOj5 = await QuickToken.new(addressCoT44d, addresstbwmq9W, {from: accounts[2]});
		const uinthzuwucK = BigInt("1935")
		const addresshvw9M9r = accounts[3]
		const uintCZtvCBj = BigInt("31")
		const addressQtmhdLJ = "0x0000000000000000000000000000000000000001"
		const addressXZFfkzZ = accounts[4]
		const addressGUaMZkG = accounts[4]
		const addressuxrfkxa = accounts[3]
//		const addressufT58wH = await QuickTokennGxwOj5.mint.call(addresshvw9M9r, uinthzuwucK, {from: accounts[5]});
//		const boolFNovYXm = await QuickTokennGxwOj5.transfer.call(addressQtmhdLJ, uintCZtvCBj, {from: accounts[0]});
//		const uintmNkGJDr = await QuickTokennGxwOj5.balanceOf.call(addressXZFfkzZ, {from: accounts[2]});
//		const uints44zbYR = await QuickTokennGxwOj5.allowance.call(addressuxrfkxa, addressGUaMZkG, {from: accounts[2]});

		await expect(QuickTokennGxwOj5.mint.call(addresshvw9M9r, uinthzuwucK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressnNd4MF = accounts[2]
		const addressWU38v9 = accounts[1]
		const QuickToken24G0xl = await QuickToken.new(addressnNd4MF, addressWU38v9, {from: accounts[3]});
		const uintUolnYrF = BigInt("991")
		const addressL9L4jnN = accounts[5]
		const uinta3c0sQ2 = BigInt("771")
		const addressUGJ4DBl = "0x0000000000000000000000000000000000000001"
		const booliX3KMDn = await QuickToken24G0xl.approve.call(addressL9L4jnN, uintUolnYrF, {from: accounts[0]});
//		const boolWRhXmNL = await QuickToken24G0xl.transfer.call(addressUGJ4DBl, uinta3c0sQ2, {from: accounts[3]});

		assert.equal(booliX3KMDn, true)
		await expect(QuickToken24G0xl.transfer.call(addressUGJ4DBl, uinta3c0sQ2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresssBLN7h = accounts[4]
		const addresszEiN8VA = accounts[2]
		const QuickTokenWNdOoD = await QuickToken.new(addresssBLN7h, addresszEiN8VA, {from: accounts[0]});
		const addressc3TdAu2 = accounts[1]
		const uintZwU60V4 = BigInt("1634")
		const addressvC8uP1Y = accounts[5]
		const addressuBuUpeI = accounts[1]
		const addressESpb9tM = "0x0000000000000000000000000000000000000001"
		const addressqfqkU7 = accounts[2]
		const uintDoGRvLz = await QuickTokenWNdOoD.balanceOf.call(addressc3TdAu2, {from: accounts[3]});
		const boolyuRMMto = await QuickTokenWNdOoD.approve.call(addressvC8uP1Y, uintZwU60V4, {from: accounts[0]});
		const uinthxPAijN = await QuickTokenWNdOoD.allowance.call(addressESpb9tM, addressuBuUpeI, {from: accounts[3]});
		const uintXsmGD6y = await QuickTokenWNdOoD.balanceOf.call(addressqfqkU7, {from: accounts[5]});

		assert.equal(boolyuRMMto, true)
		assert.equal(uintDoGRvLz, BigInt("0"))
		assert.equal(uintXsmGD6y, BigInt("0"))
		assert.equal(uinthxPAijN, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresswZXZqLL = accounts[2]
		const addressukRqFiv = accounts[0]
		const QuickTokenl0xqXcu = await QuickToken.new(addresswZXZqLL, addressukRqFiv, {from: accounts[2]});
		const uintRBqzw5D = BigInt("1628")
		const addressKv0rMyz = accounts[3]
		const uintOGVzdMa = BigInt("1038")
		const addressrHHcWK = accounts[1]
		const addressDzuRhdO = accounts[3]
		const addressEyyWT2 = accounts[2]
		const addressNvsOeVW = accounts[5]
		const uintxhI8Anb = BigInt("669")
		const addressMyW1N1O = accounts[3]
		const boolixJ4MJC = await QuickTokenl0xqXcu.approve.call(addressKv0rMyz, uintRBqzw5D, {from: accounts[3]});
		const boolR1INkIo = await QuickTokenl0xqXcu.approve.call(addressrHHcWK, uintOGVzdMa, {from: accounts[2]});
//		const addressZ4YdP9k = await QuickTokenl0xqXcu.setMinter.call(addressDzuRhdO, {from: accounts[2]});
//		const uintRKklEkK = await QuickTokenl0xqXcu.allowance.call(addressNvsOeVW, addressEyyWT2, {from: accounts[3]});
//		const booluP654Pe = await QuickTokenl0xqXcu.approve.call(addressMyW1N1O, uintxhI8Anb, {from: accounts[0]});

		assert.equal(boolR1INkIo, true)
		assert.equal(boolixJ4MJC, true)
		await expect(QuickTokenl0xqXcu.setMinter.call(addressDzuRhdO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresspcvbvXn = accounts[0]
		const addressk0SK5O2 = accounts[0]
		const QuickTokenddbaj6H = await QuickToken.new(addresspcvbvXn, addressk0SK5O2, {from: accounts[4]});
		const addresswxpgFS = accounts[5]
		const addressAsJWI1S = accounts[4]
		const uintj04HZiB = BigInt("1076")
		const addressUAYSoUQ = accounts[5]
		const addressSvLaQzd = accounts[3]
		const uintwvEwANA = BigInt("508")
		const addressHdxW1xR = accounts[5]
		const uintC72KFw0 = BigInt("1339")
		const addressHAPcQ7F = accounts[4]
		const addressv6vLDa1 = accounts[4]
		const uintwp7pXTa = await QuickTokenddbaj6H.allowance.call(addressAsJWI1S, addresswxpgFS, {from: accounts[2]});
//		const boolab0Lxsy = await QuickTokenddbaj6H.transferFrom.call(addressSvLaQzd, addressUAYSoUQ, uintj04HZiB, {from: accounts[5]});
//		const bool9XbDSV = await QuickTokenddbaj6H.approve.call(addressHdxW1xR, uintwvEwANA, {from: accounts[2]});
//		const boolBZuKkxn = await QuickTokenddbaj6H.transfer.call(addressHAPcQ7F, uintC72KFw0, {from: accounts[4]});
//		const uintyDgJBit = await QuickTokenddbaj6H.balanceOf.call(addressv6vLDa1, {from: accounts[2]});

		assert.equal(uintwp7pXTa, BigInt("0"))
		await expect(QuickTokenddbaj6H.transferFrom.call(addressSvLaQzd, addressUAYSoUQ, uintj04HZiB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressJACiPOs = accounts[2]
		const addressWEGioVE = accounts[1]
		const QuickToken24G0xl = await QuickToken.new(addressJACiPOs, addressWEGioVE, {from: accounts[3]});
		const uintX2yf2R9 = BigInt("991")
		const addresscDkHQCE = accounts[3]
		const uintQEjDbrN = BigInt("384")
		const addressdUdn5yE = accounts[0]
		const uintkdjpLdA = BigInt("771")
		const addressrBr0Rk6 = "0x0000000000000000000000000000000000000001"
		const booliX3KMDn = await QuickToken24G0xl.approve.call(addresscDkHQCE, uintX2yf2R9, {from: accounts[0]});
		const boolwq6e01I = await QuickToken24G0xl.transfer.call(addressdUdn5yE, uintQEjDbrN, {from: accounts[2]});
//		const boolWRhXmNL = await QuickToken24G0xl.transfer.call(addressrBr0Rk6, uintkdjpLdA, {from: accounts[3]});

		assert.equal(booliX3KMDn, true)
		assert.equal(boolwq6e01I, true)
		await expect(QuickToken24G0xl.transfer.call(addressrBr0Rk6, uintkdjpLdA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const address5kPhvF = accounts[2]
		const addressUI9t59p = accounts[1]
		const QuickToken24G0xl = await QuickToken.new(address5kPhvF, addressUI9t59p, {from: accounts[3]});
		const uintwBRcUnf = BigInt("672")
		const addressQ8Yh0Sa = accounts[3]
		const uintQbA2w5E = BigInt("2047")
		const addressOCui1pw = accounts[2]
		const addressMyHprAy = accounts[4]
		const uintek5ME4z = BigInt("1022")
		const addressEKPyI2e = accounts[5]
		const addressQnLHtiQ = await QuickToken24G0xl.mint.call(addressQ8Yh0Sa, uintwBRcUnf, {from: accounts[1]});
//		const boolpdDjT4y = await QuickToken24G0xl.transferFrom.call(addressMyHprAy, addressOCui1pw, uintQbA2w5E, {from: accounts[0]});
//		const booliX3KMDn = await QuickToken24G0xl.approve.call(addressEKPyI2e, uintek5ME4z, {from: accounts[0]});

		await expect(QuickToken24G0xl.transferFrom.call(addressMyHprAy, addressOCui1pw, uintQbA2w5E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressrPXFguv = accounts[2]
		const addressthXFVKb = accounts[1]
		const QuickToken24G0xl = await QuickToken.new(addressrPXFguv, addressthXFVKb, {from: accounts[3]});
		const uintnsLk62i = BigInt("938")
		const addressvIu5HFs = accounts[0]
		const uintiT8LJbn = BigInt("1821")
		const addressnUNJfIz = "0x0000000000000000000000000000000000000000"
		const uintfF3PCpp = BigInt("661")
		const addressi1JUVzH = accounts[5]
		const boole5SO7r6 = await QuickToken24G0xl.approve.call(addressvIu5HFs, uintnsLk62i, {from: accounts[0]});
//		const boolsaSRPmM = await QuickToken24G0xl.transfer.call(addressnUNJfIz, uintiT8LJbn, {from: accounts[2]});
//		const addressZrWBdwL = await QuickToken24G0xl.mint.call(addressi1JUVzH, uintfF3PCpp, {from: accounts[2]});

		assert.equal(boole5SO7r6, true)
		await expect(QuickToken24G0xl.transfer.call(addressnUNJfIz, uintiT8LJbn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})