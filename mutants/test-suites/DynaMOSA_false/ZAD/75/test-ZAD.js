const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADZsnACGN = await ZAD.new({from: accounts[2]});
		const uintIifzwwJ = BigInt("323")
		const addressEzdTzkS = accounts[1]
		const boolnGNuCdJ = await ZADZsnACGN.approve.call(addressEzdTzkS, uintIifzwwJ, {from: accounts[0]});
		const uint8t2p888G = await ZADZsnACGN.decimals.call({from: accounts[4]});

		assert.equal(boolnGNuCdJ, true)
		assert.equal(uint8t2p888G, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADhbNAiKc = await ZAD.new({from: accounts[4]});
		const uinttZfhu8a = BigInt("127")
		const addressKIZv4N = "0x0000000000000000000000000000000000000001"
		const uintXnXiFko = BigInt("1190")
		const addressgZAV9ag = accounts[3]
		const uintX5geMJ1 = BigInt("143")
		const addressI48EH4 = accounts[5]
		const boolNNitJoq = await ZADhbNAiKc.approve.call(addressKIZv4N, uinttZfhu8a, {from: accounts[5]});
		const uint8imccBRQ = await ZADhbNAiKc.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolftnfR9I = await ZADhbNAiKc.transfer.call(addressgZAV9ag, uintXnXiFko, {from: accounts[3]});
//		const bools6SlYhW = await ZADhbNAiKc.increaseAllowance.call(addressI48EH4, uintX5geMJ1, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VPnbLKV = await ZADhbNAiKc.totalSupply.call({from: accounts[0]});

		assert.equal(boolNNitJoq, true)
		assert.equal(uint8imccBRQ, BigInt("18"))
		await expect(ZADhbNAiKc.transfer.call(addressgZAV9ag, uintXnXiFko, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADjd8JGr = await ZAD.new({from: accounts[2]});
		const uintzGHT1dW = BigInt("2035")
		const addresskskOfF5 = accounts[1]
		const addressu0bcLk = accounts[3]
		const addressjfX4fGk = accounts[0]
		const uintYnIMXXv = BigInt("1770")
		const addresssxZi0wQ = "0x0000000000000000000000000000000000000001"
//		const boolB05ftcT = await ZADjd8JGr.transferFrom.call(addressu0bcLk, addresskskOfF5, uintzGHT1dW, {from: accounts[5]});
//		const uint8OU5m3G3 = await ZADjd8JGr.decimals.call({from: accounts[0]});
//		const stringUltjDDv = await ZADjd8JGr.symbol.call({from: accounts[4]});
//		const uint256eGfOLWU = await ZADjd8JGr.balanceOf.call(addressjfX4fGk, {from: accounts[1]});
//		const booltaiLREy = await ZADjd8JGr.approve.call(addresssxZi0wQ, uintYnIMXXv, {from: accounts[2]});

		await expect(ZADjd8JGr.transferFrom.call(addressu0bcLk, addresskskOfF5, uintzGHT1dW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADjGF6SIf = await ZAD.new({from: accounts[4]});
		const uintQqusrL = BigInt("92")
		const addressPydSu5b = accounts[4]
		const uintdyFV6Fb = BigInt("520")
		const addressc8R99Ts = accounts[2]
		const uinttNLWtbh = BigInt("12")
		const address0FIBkx = accounts[0]
		const booloWAweBq = await ZADjGF6SIf.approve.call(addressPydSu5b, uintQqusrL, {from: accounts[5]});
		const stringpu27c9 = await ZADjGF6SIf.symbol.call({from: accounts[5]});
		const boolpeDXmfS = await ZADjGF6SIf.approve.call(addressc8R99Ts, uintdyFV6Fb, {from: accounts[3]});
//		const boolRDRhkY = await ZADjGF6SIf.decreaseAllowance.call(address0FIBkx, uinttNLWtbh, {from: accounts[3]});

		assert.equal(booloWAweBq, true)
		assert.equal(boolpeDXmfS, true)
		assert.equal(stringpu27c9, "ZAD")
		await expect(ZADjGF6SIf.decreaseAllowance.call(address0FIBkx, uinttNLWtbh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAx2m4ip = await ZAD.new({from: accounts[1]});
		const addressiLPqaOO = accounts[2]
		const addressWimMYHu = accounts[2]
		const addressjLYFds8 = accounts[3]
		const addressBV5jmID = accounts[1]
		const addressnM30HBV = accounts[1]
		const addressruJiAQs = "0x0000000000000000000000000000000000000001"
		const addressT1F8Ham = accounts[2]
		const uint256AqPW7zs = await ZADAx2m4ip.allowance.call(addressWimMYHu, addressiLPqaOO, {from: accounts[4]});
		const uint2563qsRO3 = await ZADAx2m4ip.balanceOf.call(addressjLYFds8, {from: accounts[4]});
		const uint2569ZlZHy = await ZADAx2m4ip.allowance.call(addressnM30HBV, addressBV5jmID, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RTxgj8O = await ZADAx2m4ip.allowance.call(addressT1F8Ham, addressruJiAQs, {from: accounts[1]});

		assert.equal(uint2563qsRO3, BigInt("0"))
		assert.equal(uint2569ZlZHy, BigInt("0"))
		assert.equal(uint256AqPW7zs, BigInt("0"))
		assert.equal(uint256RTxgj8O, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADYvDnfJ6 = await ZAD.new({from: accounts[4]});
		const addresskZy29Dn = accounts[1]
		const addressG6TLLbq = accounts[0]
		const uintSF2mk1N = BigInt("194")
		const addressYKB1dc = accounts[3]
		const uint256Fbb75kW = await ZADYvDnfJ6.totalSupply.call({from: accounts[3]});
		const uint256ypRdw3p = await ZADYvDnfJ6.allowance.call(addressG6TLLbq, addresskZy29Dn, {from: accounts[0]});
//		const boolamCUX3 = await ZADYvDnfJ6.decreaseAllowance.call(addressYKB1dc, uintSF2mk1N, {from: accounts[2]});

		assert.equal(uint256Fbb75kW, BigInt("100000000000000000000000000"))
		assert.equal(uint256ypRdw3p, BigInt("0"))
		await expect(ZADYvDnfJ6.decreaseAllowance.call(addressYKB1dc, uintSF2mk1N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADwgtsKqQ = await ZAD.new({from: accounts[2]});
		const uintJvrxYFA = BigInt("1485")
		const addressGOlr1Kv = accounts[3]
		const uintqKYBSZ = BigInt("1982")
		const addressDnEy01t = "0x0000000000000000000000000000000000000001"
		const boolbcqajK = await ZADwgtsKqQ.increaseAllowance.call(addressGOlr1Kv, uintJvrxYFA, {from: accounts[1]});
//		const boolXA2gk3R = await ZADwgtsKqQ.decreaseAllowance.call(addressDnEy01t, uintqKYBSZ, {from: accounts[1]});
//		const uint8XA0mOBH = await ZADwgtsKqQ.decimals.call({from: accounts[1]});

		assert.equal(boolbcqajK, true)
		await expect(ZADwgtsKqQ.decreaseAllowance.call(addressDnEy01t, uintqKYBSZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADLKzv4C7 = await ZAD.new({from: accounts[1]});
		const uintVCZqCc2 = BigInt("129")
		const addressgNz0wcN = accounts[2]
		const addresspLyGx0 = accounts[4]
		const addressg5FLzC9 = "0x0000000000000000000000000000000000000001"
		const uintEcWKdXz = BigInt("517")
		const addressnkfyRVo = accounts[4]
		const addressVapHMZK = "0x0000000000000000000000000000000000000001"
		const string2tMe4j = await ZADLKzv4C7.name.call({from: accounts[1]});
		const stringkxQ5hiU = await ZADLKzv4C7.symbol.call({from: accounts[3]});
//		const boolnUSU9rb = await ZADLKzv4C7.transfer.call(addressgNz0wcN, uintVCZqCc2, {from: accounts[5]});
//		const uint256QKXsPca = await ZADLKzv4C7.allowance.call(addressg5FLzC9, addresspLyGx0, {from: accounts[2]});
//		const boolJjbWApe = await ZADLKzv4C7.transferFrom.call(addressVapHMZK, addressnkfyRVo, uintEcWKdXz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(string2tMe4j, "Zadkiel")
		assert.equal(stringkxQ5hiU, "ZAD")
		await expect(ZADLKzv4C7.transfer.call(addressgNz0wcN, uintVCZqCc2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAx2m4ip = await ZAD.new({from: accounts[1]});
		const addresslAI9m4S = accounts[2]
		const addressK6FEn6 = accounts[2]
		const uintyLbVxdA = BigInt("645")
		const addressUIzBaOQ = accounts[3]
		const addressICuvScZ = accounts[1]
		const addressmxXewCe = accounts[1]
		const addressW2XAPb2 = "0x0000000000000000000000000000000000000001"
		const addressEZH2osn = accounts[2]
		const uint256AqPW7zs = await ZADAx2m4ip.allowance.call(addressK6FEn6, addresslAI9m4S, {from: accounts[4]});
//		const uint256MTr74z0 = await ZADAx2m4ip._burn.call(uintyLbVxdA, {from: accounts[0]});
//		const uint2563qsRO3 = await ZADAx2m4ip.balanceOf.call(addressUIzBaOQ, {from: accounts[4]});
//		const uint2569ZlZHy = await ZADAx2m4ip.allowance.call(addressmxXewCe, addressICuvScZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RTxgj8O = await ZADAx2m4ip.allowance.call(addressEZH2osn, addressW2XAPb2, {from: accounts[1]});

		assert.equal(uint256AqPW7zs, BigInt("0"))
		await expect(ZADAx2m4ip._burn.call(uintyLbVxdA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADkcJvPe6 = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjV3UJZi = BigInt("932")
		const addressiJ3g5vP = accounts[2]
		const uintqKQYSyv = BigInt("1018")
		const addressnUDJwyC = accounts[1]
		const uintVJ3xsaX = BigInt("1328")
		const addressDtrGAr3 = accounts[1]
		const uintnBUx1nW = BigInt("1291")
		const addressvnF32MD = accounts[4]
		const uint8txFoP7 = await ZADkcJvPe6.decimals.call({from: accounts[3]});
		const boolKaob0zV = await ZADkcJvPe6.increaseAllowance.call(addressiJ3g5vP, uintjV3UJZi, {from: accounts[3]});
		const uint8fQKIzV = await ZADkcJvPe6.decimals.call({from: accounts[4]});
		const boolYrMxaLs = await ZADkcJvPe6.approve.call(addressnUDJwyC, uintqKQYSyv, {from: accounts[4]});
		const boolGEDLck = await ZADkcJvPe6.increaseAllowance.call(addressDtrGAr3, uintVJ3xsaX, {from: accounts[5]});
		const boolhjoZe2f = await ZADkcJvPe6.transfer.call(addressvnF32MD, uintnBUx1nW, {from: accounts[0]});
	});

	it('test for ZAD', async () => {
		const ZADhbNAiKc = await ZAD.new({from: accounts[4]});
		const uintncdZRgB = BigInt("127")
		const addressbfGfjl = "0x0000000000000000000000000000000000000000"
		const addressJdP9Xc = accounts[4]
		const addressXH5il3I = accounts[5]
		const uintVqSiR3L = BigInt("1190")
		const addressnEG0uXc = accounts[3]
		const uintTybPwww = BigInt("1408")
		const addressrH8DSt = accounts[2]
		const uint8lsPVh = BigInt("143")
		const addressRAa3lpW = accounts[5]
//		const boolNNitJoq = await ZADhbNAiKc.approve.call(addressbfGfjl, uintncdZRgB, {from: accounts[5]});
//		const uint8imccBRQ = await ZADhbNAiKc.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256POphXJX = await ZADhbNAiKc.allowance.call(addressXH5il3I, addressJdP9Xc, {from: accounts[2]});
//		const boolftnfR9I = await ZADhbNAiKc.transfer.call(addressnEG0uXc, uintVqSiR3L, {from: accounts[3]});
//		const boolMsJvq3G = await ZADhbNAiKc.transfer.call(addressrH8DSt, uintTybPwww, {from: accounts[1]});
//		const bools6SlYhW = await ZADhbNAiKc.increaseAllowance.call(addressRAa3lpW, uint8lsPVh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VPnbLKV = await ZADhbNAiKc.totalSupply.call({from: accounts[0]});

		await expect(ZADhbNAiKc.approve.call(addressbfGfjl, uintncdZRgB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})