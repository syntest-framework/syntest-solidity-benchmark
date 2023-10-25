const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractd6a6npn = await VBZRXWrapper.new({from: accounts[4]});
		const valueghYnLCh = BigInt("1323")
		const valueGdVpix9 = BigInt("384")
		const spenderT6JcEBf = accounts[4]
		const valueQ77mW9Y = BigInt("539")
		const spenderoybfwZO = accounts[0]
		const valueVQe54vX = BigInt("1720")
		const dstmbMYvJ3 = accounts[2]
		const srchSUCXPe = accounts[1]
		await contractd6a6npn.deposit.call(valueghYnLCh, {from: accounts[1]});
		const nullgsVwi6v = await contractd6a6npn.approve.call(spenderT6JcEBf, valueGdVpix9, {from: accounts[1]});
		const nullOtglETM = await contractd6a6npn.approve.call(spenderoybfwZO, valueQ77mW9Y, {from: accounts[4]});
		const nulltlewX24 = await contractd6a6npn.transferFrom.call(srchSUCXPe, dstmbMYvJ3, valueVQe54vX, {from: accounts[1]});

		await expect(contractd6a6npn.deposit.call(valueghYnLCh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractGAinohn = await VBZRXWrapper.new({from: accounts[0]});
		const valueymHRcdY = BigInt("1466")
		const dsteKPq86f = accounts[0]
		const srcC7EzmLg = accounts[2]
		const accountgyCIuZ = "0x0000000000000000000000000000000000000001"
		const valuemJdEFUv = BigInt("143")
		const nullLCJBjnX = await contractGAinohn.transferFrom.call(srcC7EzmLg, dsteKPq86f, valueymHRcdY, {from: accounts[1]});
		const nullJ51xxfi = await contractGAinohn.claimable.call(accountgyCIuZ, {from: accounts[5]});
		await contractGAinohn.deposit.call(valuemJdEFUv, {from: accounts[5]});

		await expect(contractGAinohn.transferFrom.call(srcC7EzmLg, dsteKPq86f, valueymHRcdY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractXYjHYJJ = await VBZRXWrapper.new({from: accounts[5]});
		const valueKaasQ88 = BigInt("1690")
		const dstUci2DQb = accounts[3]
		const valuetFIoKf4 = BigInt("1574")
		const dstZLCHNFS = accounts[5]
		const valueETPrdFL = BigInt("327")
		const dstUk8f0p = accounts[2]
		const srcUfzDQaX = accounts[3]
		const nullS56yhv7 = await contractXYjHYJJ.transfer.call(dstUci2DQb, valueKaasQ88, {from: accounts[0]});
		const nulljml1L1P = await contractXYjHYJJ.transfer.call(dstZLCHNFS, valuetFIoKf4, {from: accounts[0]});
		const nulldm4Cabc = await contractXYjHYJJ.transferFrom.call(srcUfzDQaX, dstUk8f0p, valueETPrdFL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractXYjHYJJ.transfer.call(dstUci2DQb, valueKaasQ88, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractlDosczt = await VBZRXWrapper.new({from: accounts[0]});
		const valuehhAgKDu = BigInt("70")
		const valueKvVe4FB = BigInt("1563")
		const dstuoYRLBK = accounts[0]
		const srcsVA3YF = accounts[4]
		const valuetHeF5t2 = BigInt("537")
		const dstlQgFiK2 = "0x0000000000000000000000000000000000000001"
		const srcjOWAMqv = accounts[3]
		const nulllLWqoYf = await contractlDosczt.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await contractlDosczt.deposit.call(valuehhAgKDu, {from: accounts[4]});
		const nullbNtwLx1 = await contractlDosczt.transferFrom.call(srcsVA3YF, dstuoYRLBK, valueKvVe4FB, {from: accounts[4]});
		const nullqh2jxLr = await contractlDosczt.transferFrom.call(srcjOWAMqv, dstlQgFiK2, valuetHeF5t2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulllLWqoYf, 0)
		await expect(contractlDosczt.deposit.call(valuehhAgKDu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractvX2sOuR = await VBZRXWrapper.new({from: accounts[3]});
		const accountk6RBvMq = accounts[2]
		const valueoDGQlDM = BigInt("445")
		const accountHTVaSra = accounts[0]
		const nullKWeCk34 = await contractvX2sOuR.claimable.call(accountk6RBvMq, {from: accounts[1]});
		await contractvX2sOuR.deposit.call(valueoDGQlDM, {from: accounts[4]});
		const nulliKAUOC = await contractvX2sOuR.claimable.call(accountHTVaSra, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractvX2sOuR.claimable.call(accountk6RBvMq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractVdOI6EQ = await VBZRXWrapper.new({from: accounts[3]});
		await contractVdOI6EQ.exit.call({from: accounts[2]});
		const nullptAApjn = await contractVdOI6EQ.claim.call({from: accounts[3]});

		await expect(contractVdOI6EQ.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractMQ1x8Da = await VBZRXWrapper.new({from: accounts[3]});
		const valuefzPjLBU = BigInt("1193")
		const spenderCKkIR9N = "0x0000000000000000000000000000000000000001"
		const valueRmkJzrK = BigInt("1646")
		const dstyGTJPt = accounts[2]
		const srcycQFpBm = accounts[3]
		const accountzsFiaQF = accounts[4]
		const valueHsAaTKo = BigInt("312")
		const dstWEytwVR = accounts[4]
		const srcFmaEmeC = accounts[4]
		const nulljpXevQt = await contractMQ1x8Da.approve.call(spenderCKkIR9N, valuefzPjLBU, {from: accounts[2]});
		const nullGsWxTFb = await contractMQ1x8Da.transferFrom.call(srcycQFpBm, dstyGTJPt, valueRmkJzrK, {from: accounts[0]});
		const nullXbjKDHy = await contractMQ1x8Da.claimable.call(accountzsFiaQF, {from: accounts[2]});
		const nullcUf8Bw = await contractMQ1x8Da.transferFrom.call(srcFmaEmeC, dstWEytwVR, valueHsAaTKo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulljpXevQt, true)
		await expect(contractMQ1x8Da.transferFrom.call(srcycQFpBm, dstyGTJPt, valueRmkJzrK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractdbO72xD = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueqcGREig = BigInt("1567")
		const spenderYY9Xfa = accounts[1]
		const valueszLt8G0 = BigInt("128")
		const spendergZv0OUA = accounts[1]
		const valuejeAZRl = BigInt("284")
		const valuebAHI1SR = BigInt("1732")
		const nullYErytQf = await contractdbO72xD.approve.call(spenderYY9Xfa, valueqcGREig, {from: accounts[4]});
		const nullkllYick = await contractdbO72xD.approve.call(spendergZv0OUA, valueszLt8G0, {from: accounts[5]});
		await contractdbO72xD.deposit.call(valuejeAZRl, {from: accounts[1]});
		await contractdbO72xD.deposit.call(valuebAHI1SR, {from: accounts[3]});
	});
})