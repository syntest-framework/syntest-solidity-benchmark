const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractnYunvQ = await VBZRXWrapper.new({from: accounts[4]});
		const valueG6ELi76 = BigInt("53")
		const spenderBHOKgMF = accounts[4]
		const valueOD7OPf = BigInt("491")
		const valueWW1BpHk = BigInt("334")
		const value9nrI1f = BigInt("1138")
		const accountRBEvPLT = "0x0000000000000000000000000000000000000001"
		const nullUa8j23n = await contractnYunvQ.approve.call(spenderBHOKgMF, valueG6ELi76, {from: accounts[3]});
		await contractnYunvQ.deposit.call(valueOD7OPf, {from: accounts[0]});
		await contractnYunvQ.deposit.call(valueWW1BpHk, {from: accounts[0]});
		await contractnYunvQ.deposit.call(value9nrI1f, {from: accounts[1]});
		const nullEZQ5JbH = await contractnYunvQ.claim.call({from: accounts[4]});
		const nullCWNryzQ = await contractnYunvQ.claimable.call(accountRBEvPLT, {from: accounts[1]});

		assert.equal(nullUa8j23n, true)
		await expect(contractnYunvQ.deposit.call(valueOD7OPf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractCgvMjnV = await VBZRXWrapper.new({from: accounts[1]});
		const valueJoU2tRy = BigInt("1128")
		const dstMMpAagb = accounts[2]
		const srcRTm21fn = accounts[4]
		const nullnAttlP4 = await contractCgvMjnV.transferFrom.call(srcRTm21fn, dstMMpAagb, valueJoU2tRy, {from: accounts[0]});
		const nullJATahyo = await contractCgvMjnV.claim.call({from: accounts[4]});

		await expect(contractCgvMjnV.transferFrom.call(srcRTm21fn, dstMMpAagb, valueJoU2tRy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractdCyCA5u = await VBZRXWrapper.new({from: accounts[2]});
		const valueVgLLE5D = BigInt("1637")
		const dstQ0uM3d7 = accounts[0]
		const valueogcXZf4 = BigInt("1826")
		const spendergGE2aXH = accounts[2]
		const nullBT8uosn = await contractdCyCA5u.transfer.call(dstQ0uM3d7, valueVgLLE5D, {from: accounts[2]});
		await contractdCyCA5u.exit.call({from: accounts[2]});
		const nullERx6jN = await contractdCyCA5u.approve.call(spendergGE2aXH, valueogcXZf4, {from: accounts[5]});

		await expect(contractdCyCA5u.transfer.call(dstQ0uM3d7, valueVgLLE5D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractc1G2ngW = await VBZRXWrapper.new({from: accounts[3]});
		const valuee04qwCR = BigInt("2003")
		const valuebP0mny5 = BigInt("794")
		const dstkwT8v3M = accounts[4]
		const srceuKKVNu = accounts[3]
		const valuebIydkTv = BigInt("256")
		const spenderiwTWLZB = accounts[3]
		const nullxhttLqD = await contractc1G2ngW.claim.call({from: accounts[0]});
		await contractc1G2ngW.withdraw.call(valuee04qwCR, {from: accounts[1]});
		const nulldJTOZhj = await contractc1G2ngW.transferFrom.call(srceuKKVNu, dstkwT8v3M, valuebP0mny5, {from: accounts[0]});
		const nullkaQP7jp = await contractc1G2ngW.approve.call(spenderiwTWLZB, valuebIydkTv, {from: accounts[5]});
		const nullBdnSNiq = await contractc1G2ngW.claim.call({from: accounts[4]});

		assert.equal(nullxhttLqD, 0)
		await expect(contractc1G2ngW.withdraw.call(valuee04qwCR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractAbzeTVM = await VBZRXWrapper.new({from: accounts[5]});
		const accountTu3stI = accounts[3]
		const valueRrW4Gj = BigInt("759")
		const dstGnNFR01 = accounts[0]
		const nullp5kOlN2 = await contractAbzeTVM.claimable.call(accountTu3stI, {from: accounts[1]});
		await contractAbzeTVM.exit.call({from: accounts[4]});
		const nullPSFlKCL = await contractAbzeTVM.claim.call({from: accounts[5]});
		const nullwChnn6 = await contractAbzeTVM.transfer.call(dstGnNFR01, valueRrW4Gj, {from: accounts[0]});

		await expect(contractAbzeTVM.claimable.call(accountTu3stI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractxwwGnpq = await VBZRXWrapper.new({from: accounts[1]});
		const valuebwSfFRI = BigInt("603")
		const valueY3LGPqO = BigInt("671")
		await contractxwwGnpq.exit.call({from: accounts[4]});
		await contractxwwGnpq.deposit.call(valuebwSfFRI, {from: accounts[4]});
		await contractxwwGnpq.deposit.call(valueY3LGPqO, {from: accounts[2]});

		await expect(contractxwwGnpq.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractckJMEnu = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueaRgB0XE = BigInt("1019")
		const dsteKlgAyZ = "0x0000000000000000000000000000000000000001"
		const valueTpErWBb = BigInt("130")
		const dstLdqA9e = accounts[0]
		const srcXDplUF4 = accounts[4]
		const valueiVxus1r = BigInt("464")
		const spenderIseix2M = accounts[3]
		const valueQmUeJ37 = BigInt("741")
		const accountV2VZE9V = accounts[3]
		const nullr43D2dd = await contractckJMEnu.transfer.call(dsteKlgAyZ, valueaRgB0XE, {from: accounts[4]});
		const nullP8nRgnc = await contractckJMEnu.transferFrom.call(srcXDplUF4, dstLdqA9e, valueTpErWBb, {from: accounts[4]});
		const nullojvUari = await contractckJMEnu.approve.call(spenderIseix2M, valueiVxus1r, {from: accounts[3]});
		await contractckJMEnu.deposit.call(valueQmUeJ37, {from: accounts[2]});
		const nullX7LkQH0 = await contractckJMEnu.claimable.call(accountV2VZE9V, {from: accounts[1]});
	});
})