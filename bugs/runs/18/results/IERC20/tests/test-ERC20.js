const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractDnDT5I7 = await ERC20.new({from: accounts[4]});
		const spenderACjL9e = "0x0000000000000000000000000000000000000001"
		const ownerPbZEUU = accounts[4]
		const spenderZaHy711 = accounts[0]
		const ownerSS0nO9z = accounts[1]
		const ownerkiD6xHr = accounts[0]
		const nullM6CRPqZ = await contractDnDT5I7.allowance.call(ownerPbZEUU, spenderACjL9e, {from: "0x0000000000000000000000000000000000000001"});
		const nullA1lzXFj = await contractDnDT5I7.totalSupply.call({from: accounts[0]});
		const nullZ42H606 = await contractDnDT5I7.allowance.call(ownerSS0nO9z, spenderZaHy711, {from: accounts[0]});
		const nullOklPrb = await contractDnDT5I7.balanceOf.call(ownerkiD6xHr, {from: accounts[2]});

		assert.equal(nullA1lzXFj, 0)
		assert.equal(nullM6CRPqZ, 0)
		assert.equal(nullOklPrb, 0)
		assert.equal(nullZ42H606, 0)
	});

	it('test for ERC20', async () => {
		const contractnLuFvH4 = await ERC20.new({from: accounts[4]});
		const spenderme6N2dn = accounts[5]
		const ownerSzurr9C = accounts[1]
		const spenderZRzHkM2 = accounts[4]
		const ownerpA6nCL = accounts[3]
		const valueLsnPfC = BigInt("15")
		const tokZ3JwUf = accounts[0]
		const nullTtgGf2D = await contractnLuFvH4.totalSupply.call({from: accounts[0]});
		const nullL19sNFo = await contractnLuFvH4.allowance.call(ownerSzurr9C, spenderme6N2dn, {from: accounts[5]});
		const nullvP4dyp4 = await contractnLuFvH4.totalSupply.call({from: accounts[3]});
		const nullDVjTeBd = await contractnLuFvH4.allowance.call(ownerpA6nCL, spenderZRzHkM2, {from: accounts[0]});
		const nullqXL2gCe = await contractnLuFvH4.transfer.call(tokZ3JwUf, valueLsnPfC, {from: accounts[3]});

		assert.equal(nullDVjTeBd, 0)
		assert.equal(nullL19sNFo, 0)
		assert.equal(nullTtgGf2D, 0)
		assert.equal(nullvP4dyp4, 0)
		await expect(contractnLuFvH4.transfer.call(tokZ3JwUf, valueLsnPfC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractaDJ7cF0 = await ERC20.new({from: accounts[5]});
		const subtractedValueyY0DdZm = BigInt("1513")
		const spenderMvPOlOF = accounts[4]
		const valuec5TxY3F = BigInt("1045")
		const tozCTvCuj = accounts[2]
		const fromB5dkuNd = accounts[1]
		const ownertap005 = accounts[1]
		const ownerRS2u2S = accounts[3]
		const valuealcgd81 = BigInt("1447")
		const tocigUsi = accounts[0]
		const valueUi0f9sg = BigInt("1433")
		const spenderpna5U8R = "0x0000000000000000000000000000000000000001"
		const nullHLfp8c = await contractaDJ7cF0.decreaseAllowance.call(spenderMvPOlOF, subtractedValueyY0DdZm, {from: accounts[2]});
		const nullbxWsJye = await contractaDJ7cF0.transferFrom.call(fromB5dkuNd, tozCTvCuj, valuec5TxY3F, {from: accounts[2]});
		const nullJRcyJQo = await contractaDJ7cF0.balanceOf.call(ownertap005, {from: accounts[1]});
		const null56EaHU = await contractaDJ7cF0.balanceOf.call(ownerRS2u2S, {from: "0x0000000000000000000000000000000000000001"});
		const nullhLpeqzd = await contractaDJ7cF0.transfer.call(tocigUsi, valuealcgd81, {from: accounts[5]});
		const nullstZRqra = await contractaDJ7cF0.approve.call(spenderpna5U8R, valueUi0f9sg, {from: accounts[1]});

		await expect(contractaDJ7cF0.decreaseAllowance.call(spenderMvPOlOF, subtractedValueyY0DdZm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractEPZq88J = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuer787Rdd = BigInt("1003")
		const tog1shwdi = "0x0000000000000000000000000000000000000001"
		const fromi32nf1N = accounts[0]
		const valueRh8O9x = BigInt("1382")
		const towFs5WDg = accounts[5]
		const fromop57Vlz = accounts[2]
		const ownerUzazgKH = accounts[2]
		const owneraxdc3yQ = accounts[1]
		const valuenGGUren = BigInt("903")
		const toeWFvMrI = accounts[1]
		const fromaWVDlEC = accounts[4]
		const nullttFHtMQ = await contractEPZq88J.transferFrom.call(fromi32nf1N, tog1shwdi, valuer787Rdd, {from: "0x0000000000000000000000000000000000000001"});
		const nullKb5sLGn = await contractEPZq88J.transferFrom.call(fromop57Vlz, towFs5WDg, valueRh8O9x, {from: accounts[3]});
		const nullwtDbHC6 = await contractEPZq88J.balanceOf.call(ownerUzazgKH, {from: accounts[4]});
		const nullzfLwxt = await contractEPZq88J.balanceOf.call(owneraxdc3yQ, {from: accounts[1]});
		const nullBagsMR = await contractEPZq88J.transferFrom.call(fromaWVDlEC, toeWFvMrI, valuenGGUren, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractFOfKfl5 = await ERC20.new({from: accounts[4]});
		const valueFpV6zK1 = BigInt("1864")
		const toaKOAqur = accounts[5]
		const fromuJzEVV = accounts[2]
		const valuep34ljf6 = BigInt("842")
		const toavmEO1I = accounts[2]
		const fromK2aMtaN = "0x0000000000000000000000000000000000000001"
		const ownergrn8Att = accounts[4]
		const value5kbGBM = BigInt("1047")
		const toinYBXaO = accounts[3]
		const fromTTjm72D = accounts[1]
		const subtractedValueNjxWkf = BigInt("1680")
		const spenderBbopS8x = accounts[1]
		const nullqQRWRtc = await contractFOfKfl5.transferFrom.call(fromuJzEVV, toaKOAqur, valueFpV6zK1, {from: accounts[1]});
		const nullx4ZJwq = await contractFOfKfl5.transferFrom.call(fromK2aMtaN, toavmEO1I, valuep34ljf6, {from: accounts[2]});
		const nullkiOI8N3 = await contractFOfKfl5.balanceOf.call(ownergrn8Att, {from: accounts[2]});
		const nulllUt449f = await contractFOfKfl5.transferFrom.call(fromTTjm72D, toinYBXaO, value5kbGBM, {from: "0x0000000000000000000000000000000000000001"});
		const nullZ5BVSKS = await contractFOfKfl5.decreaseAllowance.call(spenderBbopS8x, subtractedValueNjxWkf, {from: accounts[4]});

		await expect(contractFOfKfl5.transferFrom.call(fromuJzEVV, toaKOAqur, valueFpV6zK1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractHFQJCQ = await ERC20.new({from: accounts[4]});
		const valuejtDJy58 = BigInt("1198")
		const spenderrDnv8UE = accounts[4]
		const valueWDMYtpB = BigInt("1166")
		const ton5WQ24v = accounts[3]
		const fromHVYoh8N = accounts[2]
		const nullTwl8olE = await contractHFQJCQ.approve.call(spenderrDnv8UE, valuejtDJy58, {from: accounts[5]});
		const nullJeoJ8Hn = await contractHFQJCQ.totalSupply.call({from: accounts[2]});
		const nullhjuoztX = await contractHFQJCQ.transferFrom.call(fromHVYoh8N, ton5WQ24v, valueWDMYtpB, {from: accounts[4]});

		assert.equal(nullJeoJ8Hn, 0)
		assert.equal(nullTwl8olE, true)
		await expect(contractHFQJCQ.transferFrom.call(fromHVYoh8N, ton5WQ24v, valueWDMYtpB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractb3yf4hZ = await ERC20.new({from: accounts[0]});
		const valueHcxe5f = BigInt("1859")
		const spenderi1e7tqv = accounts[5]
		const addedValueLmLHZa = BigInt("885")
		const spenderQy2QZD3 = accounts[4]
		const valueGgxHiCw = BigInt("684")
		const spenderWgzfUA4 = accounts[0]
		const nullLtaMW0y = await contractb3yf4hZ.approve.call(spenderi1e7tqv, valueHcxe5f, {from: accounts[2]});
		const nulloFNS1GQ = await contractb3yf4hZ.increaseAllowance.call(spenderQy2QZD3, addedValueLmLHZa, {from: accounts[4]});
		const nulllySLqUx = await contractb3yf4hZ.approve.call(spenderWgzfUA4, valueGgxHiCw, {from: accounts[2]});

		assert.equal(nullLtaMW0y, true)
		assert.equal(nulllySLqUx, true)
		assert.equal(nulloFNS1GQ, true)
	});
})