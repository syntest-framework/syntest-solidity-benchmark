const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractbOBHWgM = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueD4dDK1 = BigInt("1627")
		await contractbOBHWgM.deposit.call(valueD4dDK1, {from: accounts[3]});
		const nullnXtIO18 = await contractbOBHWgM.claim.call({from: accounts[1]});

		await expect(contractbOBHWgM.deposit.call(valueD4dDK1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractHG5zJCv = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueIlYomRn = BigInt("801")
		const dstyw2Jfv = accounts[5]
		const accountgcbIRpT = accounts[2]
		const value09FCVK = BigInt("1644")
		const valueTudJ9gU = BigInt("1526")
		const dstucJsFZ8 = accounts[1]
		const srcTVkux0k = accounts[4]
		const nullquzpVfj = await contractHG5zJCv.transfer.call(dstyw2Jfv, valueIlYomRn, {from: accounts[1]});
		const nullY0GEWrP = await contractHG5zJCv.claimable.call(accountgcbIRpT, {from: accounts[4]});
		await contractHG5zJCv.withdraw.call(value09FCVK, {from: "0x0000000000000000000000000000000000000001"});
		const nulleMzWZ0X = await contractHG5zJCv.transferFrom.call(srcTVkux0k, dstucJsFZ8, valueTudJ9gU, {from: accounts[4]});

		await expect(contractHG5zJCv.transfer.call(dstyw2Jfv, valueIlYomRn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractLlTWHQx = await VBZRXWrapper_alt.new({from: accounts[2]});
		const togglemezoi7w = false
		const addrIB1SHko = accounts[0]
		const valueNNSoJJc = BigInt("693")
		const spenderPlZzSvw = accounts[5]
		const nulltGaWHjU = await contractLlTWHQx.claim.call({from: accounts[1]});
		await contractLlTWHQx.setBridge.call(addrIB1SHko, togglemezoi7w, {from: accounts[4]});
		const nullSRExnfa = await contractLlTWHQx.approve.call(spenderPlZzSvw, valueNNSoJJc, {from: accounts[1]});

		assert.equal(nulltGaWHjU, 0)
		await expect(contractLlTWHQx.setBridge.call(addrIB1SHko, togglemezoi7w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractAC8rjsu = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuewQgjB2z = BigInt("693")
		const spendersb2K1W = accounts[6]
		const nullZeWG77d = await contractAC8rjsu.claim.call({from: accounts[1]});
		const nullqPGV94k = await contractAC8rjsu.approve.call(spendersb2K1W, valuewQgjB2z, {from: accounts[1]});

		assert.equal(nullZeWG77d, 0)
		assert.equal(nullqPGV94k, true)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractIVKpyPn = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueiMTVKp = BigInt("1762")
		const toggleLg3UgaY = false
		const addraHglZ8S = accounts[1]
		const accountWadEF7y = accounts[1]
		const valuetpKXCb9 = BigInt("693")
		const spenderRpe9ZO4 = accounts[5]
		await contractIVKpyPn.withdraw.call(valueiMTVKp, {from: accounts[0]});
		const nullg28oXxy = await contractIVKpyPn.claim.call({from: accounts[1]});
		await contractIVKpyPn.setBridge.call(addraHglZ8S, toggleLg3UgaY, {from: accounts[4]});
		const nullE8EW6EU = await contractIVKpyPn.claimable.call(accountWadEF7y, {from: accounts[5]});
		const nullD7kbPf = await contractIVKpyPn.approve.call(spenderRpe9ZO4, valuetpKXCb9, {from: accounts[1]});

		await expect(contractIVKpyPn.withdraw.call(valueiMTVKp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractJ9ZbDkX = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountLEDN8x = accounts[4]
		const valueHC4LkiJ = BigInt("829")
		const dstT1aXkSM = accounts[4]
		const nullfuDLgyi = await contractJ9ZbDkX.claimable.call(accountLEDN8x, {from: accounts[0]});
		const nullY0LE4Nl = await contractJ9ZbDkX.transfer.call(dstT1aXkSM, valueHC4LkiJ, {from: accounts[2]});
		const nulls9VFA8z = await contractJ9ZbDkX.claim.call({from: accounts[1]});

		assert.equal(nullfuDLgyi, 0)
		await expect(contractJ9ZbDkX.transfer.call(dstT1aXkSM, valueHC4LkiJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractyxoGIDx = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueV9ldwpz = BigInt("2021")
		const valuecaLf4Ja = BigInt("632")
		const dstlA2GaUB = accounts[2]
		const srcLfTQ5o = accounts[1]
		await contractyxoGIDx.exit.call({from: accounts[2]});
		await contractyxoGIDx.deposit.call(valueV9ldwpz, {from: accounts[5]});
		const nullwsA9PqD = await contractyxoGIDx.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullKVLvCHa = await contractyxoGIDx.transferFrom.call(srcLfTQ5o, dstlA2GaUB, valuecaLf4Ja, {from: accounts[3]});

		await expect(contractyxoGIDx.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXczR20 = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueNI7dph6 = BigInt("1236")
		const dst8D85PL = accounts[3]
		const srcmGNaRYC = accounts[0]
		const valueL0ygE4T = BigInt("423")
		const nullTIL8nvS = await contractXczR20.transferFrom.call(srcmGNaRYC, dst8D85PL, valueNI7dph6, {from: accounts[2]});
		await contractXczR20.deposit.call(valueL0ygE4T, {from: "0x0000000000000000000000000000000000000001"});
		await contractXczR20.exit.call({from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract9hy3UP = await VBZRXWrapper_alt.new({from: accounts[1]});
		const togglevh8q4Md = false
		const addrZ1MyFhb = accounts[1]
		await contract9hy3UP.setBridge.call(addrZ1MyFhb, togglevh8q4Md, {from: accounts[1]});
		const nullmumRE4 = await contract9hy3UP.claim.call({from: accounts[1]});

		assert.equal(nullmumRE4, 0)
	});
})