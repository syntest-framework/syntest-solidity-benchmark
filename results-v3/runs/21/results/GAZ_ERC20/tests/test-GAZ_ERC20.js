const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20F7ruGRz = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTqoBuHl = accounts[4]
		const uintnlr80u7 = BigInt("1052")
		const addressz3SxyhF = accounts[3]
		const uintcn760r5 = BigInt("2006")
		const addressuZ46m3 = accounts[4]
		const uintceJzVzT = BigInt("1579")
		const addresscTOMJD1 = accounts[4]
		const addressLaUfWGU = accounts[4]
		const uintWIiyIsy = BigInt("834")
		const addressoQtbuvP = accounts[1]
		const boolfgxJIJV = await GAZ_ERC20F7ruGRz.approve.call(addressTqoBuHl, {from: accounts[3]});
		const boolbZpUclJ = await GAZ_ERC20F7ruGRz.transfer.call(addressz3SxyhF, uintnlr80u7, {from: accounts[0]});
		const booliNcmyfy = await GAZ_ERC20F7ruGRz.transfer.call(addressuZ46m3, uintcn760r5, {from: accounts[3]});
		const boolKJWKLKg = await GAZ_ERC20F7ruGRz.transfer.call(addresscTOMJD1, uintceJzVzT, {from: accounts[2]});
		const boolLLZ6d8I = await GAZ_ERC20F7ruGRz.approve.call(addressLaUfWGU, {from: accounts[0]});
		const booldJNqXPT = await GAZ_ERC20F7ruGRz.transfer.call(addressoQtbuvP, uintWIiyIsy, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20mkoCKXL = await GAZ_ERC20.new({from: accounts[0]});
		const uinthyIXvET = BigInt("1558")
		const addressFo26Ukj = accounts[3]
		const uintq5ih5dU = BigInt("973")
		const addressnaZbNAP = accounts[0]
		const uints8lyp8j = BigInt("149")
		const addressJnSknCr = accounts[0]
		const uintIhEVysg = BigInt("892")
		const addressx2tcxq3 = accounts[4]
		const uintYH0W781 = BigInt("1831")
		const addresszHnJlhP = accounts[5]
		const addressTpVlYnc = accounts[1]
		const addressPkBbIm = accounts[1]
		const boolMny4gpN = await GAZ_ERC20mkoCKXL.approve.call(addressFo26Ukj, uinthyIXvET, {from: accounts[1]});
		const boolRZgl85O = await GAZ_ERC20mkoCKXL.approve.call(addressnaZbNAP, uintq5ih5dU, {from: accounts[2]});
		const bool9fRe5L = await GAZ_ERC20mkoCKXL.approve.call(addressJnSknCr, uints8lyp8j, {from: accounts[1]});
		const boolNi9Akux = await GAZ_ERC20mkoCKXL.approve.call(addressx2tcxq3, uintIhEVysg, {from: accounts[1]});
		const boolauxBQDn = await GAZ_ERC20mkoCKXL.transferFrom.call(addressTpVlYnc, addresszHnJlhP, uintYH0W781, {from: accounts[4]});
		const boolEwD55dc = await GAZ_ERC20mkoCKXL.approve.call(addressPkBbIm, {from: accounts[4]});

		assert.equal(bool9fRe5L, true)
		assert.equal(boolMny4gpN, true)
		assert.equal(boolNi9Akux, true)
		assert.equal(boolRZgl85O, true)
		await expect(GAZ_ERC20mkoCKXL.transferFrom.call(addressTpVlYnc, addresszHnJlhP, uintYH0W781, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20r7FYrzo = await GAZ_ERC20.new({from: accounts[3]});
		const addressUiJEkbw = accounts[4]
		const uintBZ90Q3 = BigInt("57")
		const addressXeTKpW = accounts[0]
		const uinttBlpdbt = BigInt("837")
		const addressOiSE5h2 = "0x0000000000000000000000000000000000000001"
		const uintIg7SEoU = BigInt("570")
		const addresscWMKeTv = accounts[2]
		const uintpcdzsZu = BigInt("408")
		const addresshHOwD0n = accounts[1]
		const addressRFpbIAo = accounts[5]
		const addressmK842o0 = accounts[5]
		const boolMkkKPj = await GAZ_ERC20r7FYrzo.approve.call(addressUiJEkbw, {from: accounts[2]});
		const boolxWVztc = await GAZ_ERC20r7FYrzo.transfer.call(addressXeTKpW, uintBZ90Q3, {from: accounts[1]});
		const boolm5OtvjC = await GAZ_ERC20r7FYrzo.approve.call(addressOiSE5h2, uinttBlpdbt, {from: accounts[3]});
		const boolJeDKYR = await GAZ_ERC20r7FYrzo.transfer.call(addresscWMKeTv, uintIg7SEoU, {from: accounts[5]});
		const booljAUBUD = await GAZ_ERC20r7FYrzo.transferFrom.call(addressRFpbIAo, addresshHOwD0n, uintpcdzsZu, {from: accounts[0]});
		const boolmBzRgo6 = await GAZ_ERC20r7FYrzo.approve.call(addressmK842o0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20r7FYrzo.approve.call(addressUiJEkbw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20meMoNWU = await GAZ_ERC20.new({from: accounts[5]});
		const uintOj9jLy7 = BigInt("1492")
		const addressS9xDkPx = accounts[2]
		const uintG4nFcQh = BigInt("1210")
		const addresstkMe8m6 = accounts[0]
		const uintx8eo25 = BigInt("643")
		const addressDF4ev2Q = accounts[3]
		const addressNqtq2nC = accounts[1]
		const uintjAIS6TY = BigInt("1474")
		const addressGhfKJAR = accounts[1]
		const boolUAeSkZx = await GAZ_ERC20meMoNWU.transfer.call(addressS9xDkPx, uintOj9jLy7, {from: accounts[2]});
		const boolbnBKFwc = await GAZ_ERC20meMoNWU.approve.call(addresstkMe8m6, uintG4nFcQh, {from: accounts[3]});
		const bool9QKytw = await GAZ_ERC20meMoNWU.transferFrom.call(addressNqtq2nC, addressDF4ev2Q, uintx8eo25, {from: accounts[1]});
		const boolkM8SmjR = await GAZ_ERC20meMoNWU.approve.call(addressGhfKJAR, uintjAIS6TY, {from: accounts[4]});

		await expect(GAZ_ERC20meMoNWU.transfer.call(addressS9xDkPx, uintOj9jLy7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yLl74Ih = await GAZ_ERC20.new({from: accounts[3]});
		const addressTNBYwVp = "0x0000000000000000000000000000000000000001"
		const uintIe0geQx = BigInt("1511")
		const addressSeXGEg = accounts[0]
		const uintnAPPUgj = BigInt("339")
		const address6VOmZz = accounts[4]
		const addressqMpY1GW = accounts[3]
		const uintaUAhKcz = BigInt("869")
		const addressQBY3FOp = accounts[4]
		const boolQbSBJ7c = await GAZ_ERC20yLl74Ih.approve.call(addressTNBYwVp, {from: accounts[1]});
		const boolLtSzgo9 = await GAZ_ERC20yLl74Ih.transfer.call(addressSeXGEg, uintIe0geQx, {from: accounts[0]});
		const boolhXV1mcd = await GAZ_ERC20yLl74Ih.transferFrom.call(addressqMpY1GW, address6VOmZz, uintnAPPUgj, {from: accounts[0]});
		const boolNLfBuvC = await GAZ_ERC20yLl74Ih.transfer.call(addressQBY3FOp, uintaUAhKcz, {from: accounts[3]});

		await expect(GAZ_ERC20yLl74Ih.approve.call(addressTNBYwVp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vIJihY8 = await GAZ_ERC20.new({from: accounts[0]});
		const addressX7BtsfZ = accounts[4]
		const uintcLKxu24 = BigInt("165")
		const addressvsFhjDC = accounts[5]
		const addressFG220sQ = accounts[0]
		const uintMpWCVLp = BigInt("873")
		const addresskBRdBEq = accounts[4]
		const addressPflBhH = "0x0000000000000000000000000000000000000000"
		const uinthbxva8l = BigInt("337")
		const addressf1byzY8 = accounts[2]
		const boolQ6S1N9b = await GAZ_ERC20vIJihY8.approve.call(addressX7BtsfZ, {from: accounts[0]});
		const boolXNdOoSE = await GAZ_ERC20vIJihY8.transferFrom.call(addressFG220sQ, addressvsFhjDC, uintcLKxu24, {from: accounts[4]});
		const boolmShrx8L = await GAZ_ERC20vIJihY8.approve.call(addresskBRdBEq, uintMpWCVLp, {from: accounts[3]});
		const boolIxV4dY6 = await GAZ_ERC20vIJihY8.approve.call(addressPflBhH, {from: accounts[0]});
		const boolIzXCTkw = await GAZ_ERC20vIJihY8.approve.call(addressf1byzY8, uinthbxva8l, {from: accounts[4]});

		await expect(GAZ_ERC20vIJihY8.approve.call(addressX7BtsfZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vIJihY8 = await GAZ_ERC20.new({from: accounts[0]});
		const addresscj68rIy = accounts[1]
		const uintiazt0sm = BigInt("165")
		const addressvm6nnib = accounts[5]
		const addressqjq1hzc = accounts[1]
		const uintvFJcCR = BigInt("1826")
		const addressAHxI7HJ = accounts[0]
		const addressLVJCRtr = accounts[0]
		const boolR5mt75 = await GAZ_ERC20vIJihY8.approve.call(addresscj68rIy, {from: accounts[3]});
		const boolXNdOoSE = await GAZ_ERC20vIJihY8.transferFrom.call(addressqjq1hzc, addressvm6nnib, uintiazt0sm, {from: accounts[4]});
		const boolgt4O3mz = await GAZ_ERC20vIJihY8.transferFrom.call(addressLVJCRtr, addressAHxI7HJ, uintvFJcCR, {from: accounts[2]});

		await expect(GAZ_ERC20vIJihY8.approve.call(addresscj68rIy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vIJihY8 = await GAZ_ERC20.new({from: accounts[0]});
		const addressiLGTogT = accounts[4]
		const uintUXwVUQS = BigInt("1259")
		const addressLNGd7O1 = accounts[4]
		const uintZlNyhgi = BigInt("165")
		const addressVN7qVpe = accounts[5]
		const addressl5GZmG2 = accounts[0]
		const boolH2Zwcfp = await GAZ_ERC20vIJihY8.approve.call(addressiLGTogT, {from: accounts[4]});
		const boolmNVEFJ = await GAZ_ERC20vIJihY8.transfer.call(addressLNGd7O1, uintUXwVUQS, {from: accounts[1]});
		const boolXNdOoSE = await GAZ_ERC20vIJihY8.transferFrom.call(addressl5GZmG2, addressVN7qVpe, uintZlNyhgi, {from: accounts[4]});

		await expect(GAZ_ERC20vIJihY8.approve.call(addressiLGTogT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vIJihY8 = await GAZ_ERC20.new({from: accounts[0]});
		const uintTOwD5tM = BigInt("673")
		const addressC2slZae = accounts[4]
		const uintTgC6yuz = BigInt("1269")
		const addressgEBqlw = accounts[3]
		const addressQc1PPbQ = accounts[1]
		const uintT2DUpdn = BigInt("165")
		const addressXTXj40r = accounts[6]
		const addressQa1x2Nl = accounts[0]
		const boolt0avjGV = await GAZ_ERC20vIJihY8.transfer.call(addressC2slZae, uintTOwD5tM, {from: accounts[0]});
		const boollXxn68k = await GAZ_ERC20vIJihY8.transferFrom.call(addressQc1PPbQ, addressgEBqlw, uintTgC6yuz, {from: accounts[3]});
		const boolXNdOoSE = await GAZ_ERC20vIJihY8.transferFrom.call(addressQa1x2Nl, addressXTXj40r, uintT2DUpdn, {from: accounts[4]});

		assert.equal(boolt0avjGV, true)
		await expect(GAZ_ERC20vIJihY8.transferFrom.call(addressQc1PPbQ, addressgEBqlw, uintTgC6yuz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20n6oqHCq = await GAZ_ERC20.new({from: accounts[0]});
		const addressvRGqDj8 = accounts[2]
		const uintSwVc0GY = BigInt("1885")
		const addressR9Jko1J = accounts[5]
		const uint7aA0N8 = BigInt("784")
		const addresse1YzxC = accounts[0]
		const addressRB2lIf = accounts[3]
		const uintJtPHJ3g = BigInt("1410")
		const addressCSVZHdJ = "0x0000000000000000000000000000000000000001"
		const boolm7dEc8c = await GAZ_ERC20n6oqHCq.approve.call(addressvRGqDj8, {from: "0x0000000000000000000000000000000000000001"});
		const boolHJ6YYYQ = await GAZ_ERC20n6oqHCq.approve.call(addressR9Jko1J, uintSwVc0GY, {from: accounts[1]});
		const boolcGa9XW = await GAZ_ERC20n6oqHCq.approve.call(addresse1YzxC, uint7aA0N8, {from: accounts[1]});
		const boolwgigDyo = await GAZ_ERC20n6oqHCq.approve.call(addressRB2lIf, {from: accounts[0]});
		const boolamyPa2J = await GAZ_ERC20n6oqHCq.transfer.call(addressCSVZHdJ, uintJtPHJ3g, {from: accounts[3]});

		await expect(GAZ_ERC20n6oqHCq.approve.call(addressvRGqDj8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20vIJihY8 = await GAZ_ERC20.new({from: accounts[0]});
		const addresskbqzs07 = accounts[5]
		const uintidOs0ZF = BigInt("165")
		const addressBOOq0tg = accounts[6]
		const addressEFKr30E = accounts[0]
		const uintmvyuL4Q = BigInt("396")
		const addressi6ZqOOZ = accounts[5]
		const boolQKxE3WJ = await GAZ_ERC20vIJihY8.approve.call(addresskbqzs07, {from: accounts[5]});
		const boolXNdOoSE = await GAZ_ERC20vIJihY8.transferFrom.call(addressEFKr30E, addressBOOq0tg, uintidOs0ZF, {from: accounts[4]});
		const bool8J2bmt = await GAZ_ERC20vIJihY8.transfer.call(addressi6ZqOOZ, uintmvyuL4Q, {from: accounts[2]});

		await expect(GAZ_ERC20vIJihY8.approve.call(addresskbqzs07, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})