const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractbgo3mwf = await VBZRXWrapper.new({from: accounts[4]});
		const valueLYb0afp = BigInt("1390")
		const valueR5qCgc = BigInt("1519")
		const dstw6UBi5l = accounts[4]
		const srcieq45Q8 = accounts[0]
		const valuenFlx2Hv = BigInt("1007")
		const dstLr8Calz = accounts[0]
		const srcB2S1CQV = accounts[0]
		const accountgq7Vle = accounts[4]
		await contractbgo3mwf.deposit.call(valueLYb0afp, {from: accounts[3]});
		const nullOPGekc4 = await contractbgo3mwf.transferFrom.call(srcieq45Q8, dstw6UBi5l, valueR5qCgc, {from: accounts[1]});
		const nullVeEhTMT = await contractbgo3mwf.transferFrom.call(srcB2S1CQV, dstLr8Calz, valuenFlx2Hv, {from: accounts[4]});
		const nullgrj28xu = await contractbgo3mwf.claimable.call(accountgq7Vle, {from: accounts[3]});

		await expect(contractbgo3mwf.deposit.call(valueLYb0afp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractoPccdwR = await VBZRXWrapper.new({from: accounts[2]});
		const valueo5CPh3u = BigInt("1929")
		const accountOivaCTz = accounts[0]
		await contractoPccdwR.exit.call({from: accounts[3]});
		await contractoPccdwR.exit.call({from: accounts[2]});
		await contractoPccdwR.deposit.call(valueo5CPh3u, {from: accounts[3]});
		const nullPLSPBgx = await contractoPccdwR.claimable.call(accountOivaCTz, {from: accounts[4]});

		await expect(contractoPccdwR.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractIvGM38d = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueW3SsHU = BigInt("232")
		const accountwB6zNAd = "0x0000000000000000000000000000000000000001"
		const valueS3sO8Ko = BigInt("637")
		const dstcMMJn5m = accounts[4]
		const srcg7vv0u2 = accounts[1]
		await contractIvGM38d.deposit.call(valueW3SsHU, {from: accounts[1]});
		const nully9f96oW = await contractIvGM38d.claimable.call(accountwB6zNAd, {from: accounts[3]});
		const nullcDwhYcF = await contractIvGM38d.claim.call({from: accounts[1]});
		const nullqwcXk4u = await contractIvGM38d.claim.call({from: accounts[2]});
		const nullsZ4RLiF = await contractIvGM38d.transferFrom.call(srcg7vv0u2, dstcMMJn5m, valueS3sO8Ko, {from: accounts[1]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractzYkkvwK = await VBZRXWrapper.new({from: accounts[4]});
		const accountIvHqqv = accounts[0]
		const valueK6JmgzG = BigInt("1089")
		const spenderAwlJACJ = accounts[3]
		const valueaEjUIN = BigInt("676")
		const dstgq1u5GE = accounts[1]
		const valueENI3Jhw = BigInt("770")
		const accountqeLgBnc = accounts[3]
		const null2vGaXL = await contractzYkkvwK.claimable.call(accountIvHqqv, {from: accounts[4]});
		const nullDFhK9oC = await contractzYkkvwK.approve.call(spenderAwlJACJ, valueK6JmgzG, {from: accounts[0]});
		const nullbL6nW6H = await contractzYkkvwK.transfer.call(dstgq1u5GE, valueaEjUIN, {from: accounts[3]});
		await contractzYkkvwK.deposit.call(valueENI3Jhw, {from: accounts[3]});
		await contractzYkkvwK.exit.call({from: accounts[5]});
		const nullekwWHyw = await contractzYkkvwK.claimable.call(accountqeLgBnc, {from: accounts[2]});

		await expect(contractzYkkvwK.claimable.call(accountIvHqqv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractzNJFTvp = await VBZRXWrapper.new({from: accounts[0]});
		const valueU3QeImK = BigInt("623")
		const spenderyuWMLCZ = accounts[5]
		const valueo6Rx03D = BigInt("829")
		const dstjGcYtvz = accounts[4]
		const valuehc2uWwB = BigInt("580")
		const valueAhmMiis = BigInt("39")
		const dstzi62SBZ = accounts[0]
		const nullOu8QU9w = await contractzNJFTvp.claim.call({from: accounts[1]});
		const nullvwoKoU = await contractzNJFTvp.approve.call(spenderyuWMLCZ, valueU3QeImK, {from: "0x0000000000000000000000000000000000000001"});
		const nullSFQ3OfS = await contractzNJFTvp.claim.call({from: accounts[0]});
		const nullPjSZGQw = await contractzNJFTvp.transfer.call(dstjGcYtvz, valueo6Rx03D, {from: accounts[2]});
		await contractzNJFTvp.withdraw.call(valuehc2uWwB, {from: accounts[0]});
		const nullnmTjo74 = await contractzNJFTvp.transfer.call(dstzi62SBZ, valueAhmMiis, {from: accounts[2]});

		assert.equal(nullOu8QU9w, 0)
		assert.equal(nullSFQ3OfS, 0)
		assert.equal(nullvwoKoU, true)
		await expect(contractzNJFTvp.transfer.call(dstjGcYtvz, valueo6Rx03D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})