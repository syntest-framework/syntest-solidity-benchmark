const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractV7ZVyGq = await ERC20.new({from: accounts[3]});
		const valueXDctkR2 = BigInt("1865")
		const toZSDz3po = accounts[5]
		const fromHPjXqXZ = accounts[3]
		const nullyCPxWaK = await contractV7ZVyGq.totalSupply.call({from: accounts[2]});
		const nullh2UOT0r = await contractV7ZVyGq.totalSupply.call({from: accounts[2]});
		const nulloNCvpRV = await contractV7ZVyGq.transferFrom.call(fromHPjXqXZ, toZSDz3po, valueXDctkR2, {from: accounts[2]});

		assert.equal(nullh2UOT0r, 0)
		assert.equal(nullyCPxWaK, 0)
		await expect(contractV7ZVyGq.transferFrom.call(fromHPjXqXZ, toZSDz3po, valueXDctkR2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractZi0Ueg2 = await ERC20.new({from: accounts[2]});
		const ownerIAnPSoF = accounts[3]
		const spenderxH7qdcu = accounts[0]
		const ownerqsueMpv = "0x0000000000000000000000000000000000000001"
		const valueWAUxXWR = BigInt("670")
		const toPdrsha8 = accounts[0]
		const fromKkXsrZ8 = accounts[5]
		const ownerudQWzz2 = accounts[3]
		const valueaEBuZw = BigInt("494")
		const toYi4LhkC = accounts[0]
		const frommnKNjHS = accounts[0]
		const nullxhWuWc2 = await contractZi0Ueg2.balanceOf.call(ownerIAnPSoF, {from: accounts[5]});
		const nullgYYTDrC = await contractZi0Ueg2.allowance.call(ownerqsueMpv, spenderxH7qdcu, {from: accounts[2]});
		const nullntUXL1x = await contractZi0Ueg2.transferFrom.call(fromKkXsrZ8, toPdrsha8, valueWAUxXWR, {from: accounts[1]});
		const nullZPiKko1 = await contractZi0Ueg2.balanceOf.call(ownerudQWzz2, {from: "0x0000000000000000000000000000000000000001"});
		const nullsWVxiBZ = await contractZi0Ueg2.transferFrom.call(frommnKNjHS, toYi4LhkC, valueaEBuZw, {from: accounts[4]});

		assert.equal(nullgYYTDrC, 0)
		assert.equal(nullxhWuWc2, 0)
		await expect(contractZi0Ueg2.transferFrom.call(fromKkXsrZ8, toPdrsha8, valueWAUxXWR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractfOAvAwD = await ERC20.new({from: accounts[4]});
		const subtractedValuecpYl8dn = BigInt("520")
		const spenderAx7613v = "0x0000000000000000000000000000000000000001"
		const spenderxDDBDxO = accounts[2]
		const ownerC5S9Yud = accounts[0]
		const subtractedValueUMQ8SuM = BigInt("1183")
		const spenderJM564er = accounts[3]
		const spenderXvK8tH8 = accounts[2]
		const ownerdRGiXUU = accounts[4]
		const nullGUY02oe = await contractfOAvAwD.decreaseAllowance.call(spenderAx7613v, subtractedValuecpYl8dn, {from: accounts[5]});
		const nulljxW2rYZ = await contractfOAvAwD.allowance.call(ownerC5S9Yud, spenderxDDBDxO, {from: accounts[2]});
		const nullRONeKKT = await contractfOAvAwD.decreaseAllowance.call(spenderJM564er, subtractedValueUMQ8SuM, {from: accounts[0]});
		const nullzznSCJo = await contractfOAvAwD.allowance.call(ownerdRGiXUU, spenderXvK8tH8, {from: accounts[1]});

		await expect(contractfOAvAwD.decreaseAllowance.call(spenderAx7613v, subtractedValuecpYl8dn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractOFjFB95 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValuewaNU7WK = BigInt("1590")
		const spenderu1QPIWD = accounts[2]
		const addedValueyhC7JVO = BigInt("1375")
		const spendermDxuHlH = accounts[5]
		const valuejm978v6 = BigInt("1964")
		const spenderfkmrUJj = accounts[3]
		const addedValue7usbSv = BigInt("1914")
		const spenderpNBYPAB = accounts[4]
		const nullarIcH4A = await contractOFjFB95.increaseAllowance.call(spenderu1QPIWD, addedValuewaNU7WK, {from: accounts[1]});
		const nullkDdmejr = await contractOFjFB95.increaseAllowance.call(spendermDxuHlH, addedValueyhC7JVO, {from: accounts[3]});
		const nulli3yq7J2 = await contractOFjFB95.approve.call(spenderfkmrUJj, valuejm978v6, {from: accounts[3]});
		const nullEDnDN4x = await contractOFjFB95.increaseAllowance.call(spenderpNBYPAB, addedValue7usbSv, {from: accounts[5]});
	});

	it('test for ERC20', async () => {
		const contractb6I68k1 = await ERC20.new({from: accounts[3]});
		const ownerRU223Ku = accounts[5]
		const ownerPRLQP9X = accounts[0]
		const addedValueqGoik9N = BigInt("1444")
		const spenderkgYLIfe = accounts[3]
		const subtractedValuewXYDUDE = BigInt("585")
		const spenderSNA7fiS = accounts[2]
		const nullTHRqZpn = await contractb6I68k1.balanceOf.call(ownerRU223Ku, {from: accounts[0]});
		const nullTVAIgGI = await contractb6I68k1.balanceOf.call(ownerPRLQP9X, {from: accounts[0]});
		const nullaiKbXDL = await contractb6I68k1.increaseAllowance.call(spenderkgYLIfe, addedValueqGoik9N, {from: accounts[1]});
		const nullv8aNEjf = await contractb6I68k1.decreaseAllowance.call(spenderSNA7fiS, subtractedValuewXYDUDE, {from: accounts[1]});

		assert.equal(nullTHRqZpn, 0)
		assert.equal(nullTVAIgGI, 0)
		assert.equal(nullaiKbXDL, true)
		await expect(contractb6I68k1.decreaseAllowance.call(spenderSNA7fiS, subtractedValuewXYDUDE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractaXsMcN8 = await ERC20.new({from: accounts[2]});
		const valueaGw4FcU = BigInt("1268")
		const tokPYdYO = accounts[3]
		const valueuOYCxzo = BigInt("1482")
		const spenderjV8TrWd = accounts[1]
		const valueZ4Sozvd = BigInt("1954")
		const spendern8OozKH = accounts[1]
		const nullnquCdKp = await contractaXsMcN8.totalSupply.call({from: accounts[4]});
		const nullf98VJsA = await contractaXsMcN8.transfer.call(tokPYdYO, valueaGw4FcU, {from: accounts[1]});
		const nulljhDswCY = await contractaXsMcN8.approve.call(spenderjV8TrWd, valueuOYCxzo, {from: accounts[0]});
		const nulluDg31a4 = await contractaXsMcN8.approve.call(spendern8OozKH, valueZ4Sozvd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullnquCdKp, 0)
		await expect(contractaXsMcN8.transfer.call(tokPYdYO, valueaGw4FcU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDX2f1z6 = await ERC20.new({from: accounts[1]});
		const valueB9i0NJq = BigInt("159")
		const spenderpaBgF22 = accounts[5]
		const addedValueBv3tSjm = BigInt("857")
		const spenderygeYpYV = accounts[3]
		const valuemiQYogJ = BigInt("2041")
		const toPPjMv4t = accounts[2]
		const valueJJ6IaLO = BigInt("1521")
		const tokyNbTs5 = accounts[2]
		const nullIlxQRVw = await contractDX2f1z6.approve.call(spenderpaBgF22, valueB9i0NJq, {from: accounts[2]});
		const nullakjeyqM = await contractDX2f1z6.increaseAllowance.call(spenderygeYpYV, addedValueBv3tSjm, {from: accounts[2]});
		const nulllbnxkA = await contractDX2f1z6.totalSupply.call({from: accounts[2]});
		const nulltAU6RT = await contractDX2f1z6.transfer.call(toPPjMv4t, valuemiQYogJ, {from: accounts[4]});
		const nullIKPTvdx = await contractDX2f1z6.transfer.call(tokyNbTs5, valueJJ6IaLO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullIlxQRVw, true)
		assert.equal(nullakjeyqM, true)
		assert.equal(nulllbnxkA, 0)
		await expect(contractDX2f1z6.transfer.call(toPPjMv4t, valuemiQYogJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})