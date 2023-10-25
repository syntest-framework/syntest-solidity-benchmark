const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractrE9LWh = await ERC20.new({from: accounts[4]});
		const valueAnxIhbr = BigInt("808")
		const spenderDQTIIYQ = accounts[2]
		const valuerwv5Px = BigInt("1001")
		const toX0twjpd = accounts[0]
		const fromlbWwI06 = accounts[4]
		const nullLpVjN4d = await contractrE9LWh.approve.call(spenderDQTIIYQ, valueAnxIhbr, {from: accounts[3]});
		const nullSGTV7e = await contractrE9LWh.transferFrom.call(fromlbWwI06, toX0twjpd, valuerwv5Px, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullLpVjN4d, true)
		await expect(contractrE9LWh.transferFrom.call(fromlbWwI06, toX0twjpd, valuerwv5Px, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractkOAeTQE = await ERC20.new({from: accounts[1]});
		const valueRtWS0Q3 = BigInt("286")
		const toJ9v1CO = accounts[3]
		const valueqZcFiRD = BigInt("282")
		const toSGtHeiy = accounts[1]
		const ownerViM5FBy = accounts[4]
		const valuep3KRVJy = BigInt("412")
		const toe1AoObz = accounts[0]
		const fromJCjWjUn = accounts[0]
		const nulltYNnnZE = await contractkOAeTQE.transfer.call(toJ9v1CO, valueRtWS0Q3, {from: accounts[0]});
		const nullXXU3Yhl = await contractkOAeTQE.transfer.call(toSGtHeiy, valueqZcFiRD, {from: accounts[2]});
		const nullHyk6mwS = await contractkOAeTQE.balanceOf.call(ownerViM5FBy, {from: accounts[4]});
		const nullnezCi1y = await contractkOAeTQE.transferFrom.call(fromJCjWjUn, toe1AoObz, valuep3KRVJy, {from: accounts[2]});

		await expect(contractkOAeTQE.transfer.call(toJ9v1CO, valueRtWS0Q3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractR1A0H4T = await ERC20.new({from: accounts[4]});
		const addedValueZuEb2y = BigInt("552")
		const spenderf6r6pqs = accounts[0]
		const value50SLHH = BigInt("1645")
		const tocRcLbYQ = accounts[4]
		const fromXjUyglg = accounts[3]
		const ownervjIYYxH = accounts[0]
		const subtractedValueI5hSWAm = BigInt("1282")
		const spenderp86UVUy = accounts[0]
		const nulliUq5AzW = await contractR1A0H4T.increaseAllowance.call(spenderf6r6pqs, addedValueZuEb2y, {from: accounts[0]});
		const nullmamOjH = await contractR1A0H4T.transferFrom.call(fromXjUyglg, tocRcLbYQ, value50SLHH, {from: accounts[5]});
		const nullL452bJx = await contractR1A0H4T.balanceOf.call(ownervjIYYxH, {from: accounts[3]});
		const nullWRJktou = await contractR1A0H4T.decreaseAllowance.call(spenderp86UVUy, subtractedValueI5hSWAm, {from: accounts[2]});

		assert.equal(nulliUq5AzW, true)
		await expect(contractR1A0H4T.transferFrom.call(fromXjUyglg, tocRcLbYQ, value50SLHH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractEAmNdS = await ERC20.new({from: accounts[1]});
		const spenderZqoHLxm = accounts[5]
		const ownerNBVmmln = accounts[2]
		const ownerx9MoxRt = accounts[0]
		const spenderuAbMY4p = accounts[4]
		const owneruHUnOLR = accounts[1]
		const nullJqvGG0F = await contractEAmNdS.allowance.call(ownerNBVmmln, spenderZqoHLxm, {from: "0x0000000000000000000000000000000000000001"});
		const nullBhKq84G = await contractEAmNdS.balanceOf.call(ownerx9MoxRt, {from: accounts[1]});
		const nullsGsFzhN = await contractEAmNdS.allowance.call(owneruHUnOLR, spenderuAbMY4p, {from: accounts[0]});

		assert.equal(nullBhKq84G, 0)
		assert.equal(nullJqvGG0F, 0)
		assert.equal(nullsGsFzhN, 0)
	});

	it('test for ERC20', async () => {
		const contractgrD33MI = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownereHYjcL = accounts[4]
		const ownerQvFwSMv = accounts[4]
		const addedValueqXgouTW = BigInt("1290")
		const spenderHKIALld = accounts[5]
		const subtractedValuePlG9fh5 = BigInt("676")
		const spenderboHIPvz = accounts[1]
		const ownerylvUiTv = accounts[4]
		const nullby8Ory8 = await contractgrD33MI.balanceOf.call(ownereHYjcL, {from: accounts[0]});
		const nullAPWsSsR = await contractgrD33MI.balanceOf.call(ownerQvFwSMv, {from: accounts[1]});
		const nullSAAwNmw = await contractgrD33MI.increaseAllowance.call(spenderHKIALld, addedValueqXgouTW, {from: accounts[1]});
		const nullFc6ZMOJ = await contractgrD33MI.decreaseAllowance.call(spenderboHIPvz, subtractedValuePlG9fh5, {from: accounts[4]});
		const nulljtkAG9W = await contractgrD33MI.balanceOf.call(ownerylvUiTv, {from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contractzSSmumX = await ERC20.new({from: accounts[4]});
		const addedValueiPRbAnb = BigInt("552")
		const spenderRMNfbsz = accounts[0]
		const valueuEeVaFD = BigInt("1645")
		const toJjmdY5l = accounts[4]
		const fromaPHCwqb = accounts[3]
		const ownervlgHD02 = accounts[0]
		const valuebPELg2 = BigInt("933")
		const spenderVmsZyy = "0x0000000000000000000000000000000000000001"
		const subtractedValueB44wsvt = BigInt("1282")
		const spender23tOy5 = accounts[1]
		const nullFPyYQxk = await contractzSSmumX.increaseAllowance.call(spenderRMNfbsz, addedValueiPRbAnb, {from: accounts[0]});
		const nullFGQulGV = await contractzSSmumX.totalSupply.call({from: accounts[3]});
		const nullXJ8BWJ = await contractzSSmumX.totalSupply.call({from: accounts[4]});
		const nulldflXuY = await contractzSSmumX.transferFrom.call(fromaPHCwqb, toJjmdY5l, valueuEeVaFD, {from: accounts[5]});
		const nullSnaPpSN = await contractzSSmumX.balanceOf.call(ownervlgHD02, {from: accounts[3]});
		const nullfP9msbN = await contractzSSmumX.approve.call(spenderVmsZyy, valuebPELg2, {from: accounts[3]});
		const nulloo2SquJ = await contractzSSmumX.decreaseAllowance.call(spender23tOy5, subtractedValueB44wsvt, {from: accounts[2]});

		assert.equal(nullFGQulGV, 0)
		assert.equal(nullFPyYQxk, true)
		assert.equal(nullXJ8BWJ, 0)
		await expect(contractzSSmumX.transferFrom.call(fromaPHCwqb, toJjmdY5l, valueuEeVaFD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractXzAPIr = await ERC20.new({from: accounts[4]});
		const subtractedValueLongRAr = BigInt("836")
		const spenderJNCzwa = accounts[1]
		const ownerY8ODv7v = accounts[5]
		const valueTIA93E = BigInt("590")
		const toORYxBJW = accounts[2]
		const fromrE0ubRY = accounts[1]
		const valuelSadKmW = BigInt("84")
		const toYuar9nU = accounts[5]
		const fromC9ziI9U = accounts[0]
		const spenderuEdmlgf = accounts[1]
		const ownerTD27FwC = accounts[0]
		const nullVC6FJco = await contractXzAPIr.decreaseAllowance.call(spenderJNCzwa, subtractedValueLongRAr, {from: accounts[4]});
		const nullfxfR26z = await contractXzAPIr.balanceOf.call(ownerY8ODv7v, {from: accounts[0]});
		const nullevZVeQ = await contractXzAPIr.transferFrom.call(fromrE0ubRY, toORYxBJW, valueTIA93E, {from: accounts[4]});
		const nullypAzpj = await contractXzAPIr.transferFrom.call(fromC9ziI9U, toYuar9nU, valuelSadKmW, {from: accounts[5]});
		const nullZZsQ5l9 = await contractXzAPIr.allowance.call(ownerTD27FwC, spenderuEdmlgf, {from: accounts[3]});

		await expect(contractXzAPIr.decreaseAllowance.call(spenderJNCzwa, subtractedValueLongRAr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})