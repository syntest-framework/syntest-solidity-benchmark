const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractncV5XmB = await ERC20.new({from: accounts[3]});
		const ownerLND2dH8 = accounts[4]
		const valuezfZznVX = BigInt("208")
		const toPXQjyDy = accounts[0]
		const valueR6LYgm = BigInt("473")
		const toTiSED29 = accounts[0]
		const fromHSQEEam = accounts[1]
		const nullYb5w0FD = await contractncV5XmB.totalSupply.call({from: accounts[4]});
		const nullj1uVhPt = await contractncV5XmB.balanceOf.call(ownerLND2dH8, {from: accounts[1]});
		const nullfb5dC0 = await contractncV5XmB.transfer.call(toPXQjyDy, valuezfZznVX, {from: accounts[1]});
		const nullVRCha0i = await contractncV5XmB.transferFrom.call(fromHSQEEam, toTiSED29, valueR6LYgm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullYb5w0FD, 0)
		assert.equal(nullj1uVhPt, 0)
		await expect(contractncV5XmB.transfer.call(toPXQjyDy, valuezfZznVX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractjwZUP0a = await ERC20.new({from: accounts[1]});
		const valueo99kOu = BigInt("1524")
		const toG0SsNHk = accounts[0]
		const fromLrFXp7h = accounts[3]
		const valuehOEzP8b = BigInt("820")
		const toFYqIkiQ = accounts[3]
		const ownerZdXN7Gw = accounts[3]
		const spenderZp6MmDh = accounts[4]
		const ownercdlAmCD = accounts[1]
		const nullFz2fIe = await contractjwZUP0a.transferFrom.call(fromLrFXp7h, toG0SsNHk, valueo99kOu, {from: accounts[1]});
		const nullQNbfqRT = await contractjwZUP0a.transfer.call(toFYqIkiQ, valuehOEzP8b, {from: accounts[1]});
		const nullJBxVzub = await contractjwZUP0a.balanceOf.call(ownerZdXN7Gw, {from: accounts[2]});
		const nullQpa2gF4 = await contractjwZUP0a.totalSupply.call({from: accounts[2]});
		const nullyi0K8Q = await contractjwZUP0a.allowance.call(ownercdlAmCD, spenderZp6MmDh, {from: accounts[0]});

		await expect(contractjwZUP0a.transferFrom.call(fromLrFXp7h, toG0SsNHk, valueo99kOu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUcLLBGK = await ERC20.new({from: accounts[5]});
		const valuepum8AH8 = BigInt("1695")
		const spenderVRkwKoH = accounts[2]
		const ownerERLRuza = accounts[0]
		const subtractedValuejQG5lAs = BigInt("1831")
		const spenderCZu78WR = "0x0000000000000000000000000000000000000001"
		const valueNq6m405 = BigInt("59")
		const toWlFWkKB = accounts[2]
		const fromzZnyBSv = accounts[2]
		const subtractedValuePrYRuYW = BigInt("1783")
		const spenderL2PmaUt = accounts[1]
		const nullOuU4b0V = await contractUcLLBGK.approve.call(spenderVRkwKoH, valuepum8AH8, {from: accounts[5]});
		const nullDvfdvJy = await contractUcLLBGK.balanceOf.call(ownerERLRuza, {from: accounts[5]});
		const nullJPFc8tu = await contractUcLLBGK.decreaseAllowance.call(spenderCZu78WR, subtractedValuejQG5lAs, {from: accounts[4]});
		const nullHJ79jF = await contractUcLLBGK.totalSupply.call({from: accounts[2]});
		const nullHlbusAf = await contractUcLLBGK.transferFrom.call(fromzZnyBSv, toWlFWkKB, valueNq6m405, {from: accounts[1]});
		const nulld9Y26Ng = await contractUcLLBGK.decreaseAllowance.call(spenderL2PmaUt, subtractedValuePrYRuYW, {from: accounts[2]});

		assert.equal(nullDvfdvJy, 0)
		assert.equal(nullOuU4b0V, true)
		await expect(contractUcLLBGK.decreaseAllowance.call(spenderCZu78WR, subtractedValuejQG5lAs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractCbmNSb = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueXGm6jPU = BigInt("1086")
		const tohHxsMIX = accounts[5]
		const fromtrhoUn8 = accounts[0]
		const valuePa39HUI = BigInt("534")
		const toI1uUas = accounts[4]
		const valueuvNGLHB = BigInt("278")
		const spendernaTX9V = accounts[4]
		const valueqmaIbq9 = BigInt("1740")
		const togMWDrw4 = accounts[3]
		const fromtFKIO0o = accounts[1]
		const nullYktoBmn = await contractCbmNSb.transferFrom.call(fromtrhoUn8, tohHxsMIX, valueXGm6jPU, {from: accounts[1]});
		const nullDeRtmtu = await contractCbmNSb.transfer.call(toI1uUas, valuePa39HUI, {from: accounts[3]});
		const null009T5H = await contractCbmNSb.approve.call(spendernaTX9V, valueuvNGLHB, {from: accounts[1]});
		const nullWOFZeUh = await contractCbmNSb.transferFrom.call(fromtFKIO0o, togMWDrw4, valueqmaIbq9, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractXPr5tc6 = await ERC20.new({from: accounts[2]});
		const addedValueZL64Bg = BigInt("2033")
		const spenderSNPbIUu = accounts[0]
		const valueIu8Cb2B = BigInt("1729")
		const spendertkgEj21 = accounts[1]
		const spenderZdnPOmy = accounts[3]
		const ownerAMLduLD = accounts[4]
		const nullIm0Yg2Y = await contractXPr5tc6.increaseAllowance.call(spenderSNPbIUu, addedValueZL64Bg, {from: accounts[1]});
		const nullNBH7gf = await contractXPr5tc6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullE5ffmiN = await contractXPr5tc6.approve.call(spendertkgEj21, valueIu8Cb2B, {from: accounts[0]});
		const nullI96b585 = await contractXPr5tc6.allowance.call(ownerAMLduLD, spenderZdnPOmy, {from: accounts[0]});

		assert.equal(nullE5ffmiN, true)
		assert.equal(nullI96b585, 0)
		assert.equal(nullIm0Yg2Y, true)
		assert.equal(nullNBH7gf, 0)
	});
})