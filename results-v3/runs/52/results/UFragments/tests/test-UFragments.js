const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsl36oT5K = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uintv1yeQfm = BigInt("325")
		const addressqSuk1T9 = "0x0000000000000000000000000000000000000001"
		const addressLpUdvaD = accounts[3]
		const addresshT8IZmt = await UFragmentsl36oT5K.owner.call({from: accounts[2]});
		await UFragmentsl36oT5K.onlyOwner.call({from: accounts[2]});
		const uint8Ep6XESP = await UFragmentsl36oT5K.decimals.call({from: accounts[2]});
		const boolCX0yluK = await UFragmentsl36oT5K.transferFrom.call(addressLpUdvaD, addressqSuk1T9, uintv1yeQfm, {from: accounts[5]});
	});

	it('test for UFragments', async () => {
		const UFragmentstF3Z3qR = await UFragments.new({from: accounts[2]});
		const uintv1b7acF = BigInt("393")
		const addressWwKNr70 = accounts[5]
		const intpmhrBdV = BigInt("-1073")
		const intxk3kCkn = BigInt("137")
		const addressN83oeBE = await UFragmentstF3Z3qR.initRebase.call(addressWwKNr70, uintv1b7acF, {from: accounts[1]});
		const int256z3AuUR = await UFragmentstF3Z3qR.mul.call(intxk3kCkn, intpmhrBdV, {from: accounts[0]});

		await expect(UFragmentstF3Z3qR.initRebase.call(addressWwKNr70, uintv1b7acF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsCw59BRT = await UFragments.new({from: accounts[3]});
		const addressUFrWqV = accounts[0]
		const addressJNw7LuK = accounts[0]
		const addresstpVtqye = accounts[5]
		const uint256hPQXHUt = await UFragmentsCw59BRT.allowance.call(addressJNw7LuK, addressUFrWqV, {from: accounts[4]});
		const addressDa0UDx4 = await UFragmentsCw59BRT.transferOwnership.call(addresstpVtqye, {from: accounts[0]});

		assert.equal(uint256hPQXHUt, BigInt("0"))
		await expect(UFragmentsCw59BRT.transferOwnership.call(addresstpVtqye, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsDJEnxSy = await UFragments.new({from: accounts[3]});
		const addressGa4ZnyP = accounts[1]
		const addresscEiLWCJ = accounts[2]
		const addresshYPKBBR = accounts[0]
		const addressaDRkCHW = await UFragmentsDJEnxSy.initialize.call(addressGa4ZnyP, {from: accounts[0]});
		const addressZsapLnf = await UFragmentsDJEnxSy.initialize.call(addresscEiLWCJ, {from: accounts[0]});
		const addresstcDkWMs = await UFragmentsDJEnxSy.initialize.call(addresshYPKBBR, {from: accounts[1]});

		await expect(UFragmentsDJEnxSy.initialize.call(addressGa4ZnyP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsUgOfDOS = await UFragments.new({from: accounts[0]});
		const uint8QSIlID1 = await UFragmentsUgOfDOS.decimals.call({from: accounts[3]});
		await UFragmentsUgOfDOS.initializer.call({from: accounts[1]});

		assert.equal(uint8QSIlID1, BigInt("0"))
		await expect(UFragmentsUgOfDOS.initializer.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentspvwtcBN = await UFragments.new({from: accounts[3]});
		const uintZ21YydN = BigInt("966")
		const addressPN8wqP = accounts[0]
		const addressoy7l71h = accounts[0]
		const addressQeVA8RM = accounts[0]
		const addressfyw8pry = accounts[1]
		const boolIFIhvv2 = await UFragmentspvwtcBN.approve.call(addressPN8wqP, uintZ21YydN, {from: "0x0000000000000000000000000000000000000001"});
		const boolCA71ehx = await UFragmentspvwtcBN.isOwner.call({from: accounts[3]});
		await UFragmentspvwtcBN.onlyOwner.call({from: accounts[2]});
		const addressgdT3sRg = await UFragmentspvwtcBN.initialize.call(addressoy7l71h, {from: accounts[3]});
		const uint256dJULIWH = await UFragmentspvwtcBN.allowance.call(addressfyw8pry, addressQeVA8RM, {from: accounts[4]});

		assert.equal(boolCA71ehx, false)
		assert.equal(boolIFIhvv2, true)
		await expect(UFragmentspvwtcBN.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsUgOfDOS = await UFragments.new({from: accounts[0]});
		const uint8QSIlID1 = await UFragmentsUgOfDOS.decimals.call({from: accounts[3]});
		const stringcYFtQ6p = await UFragmentsUgOfDOS.symbol.call({from: accounts[2]});
		await UFragmentsUgOfDOS.initializer.call({from: accounts[1]});

		assert.equal(stringcYFtQ6p, "")
		assert.equal(uint8QSIlID1, BigInt("0"))
		await expect(UFragmentsUgOfDOS.initializer.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsUgOfDOS = await UFragments.new({from: accounts[0]});
		const uintGCs51nM = BigInt("117")
		const stringdrVyrPl = "PrhGc64ENMBpwD2SM4HbfMLlBcScCJE6oZ8aLzMBOaWhAIauEnGrNRLpcr8v28RoDXxU1UjKayQHd9aXpEBEEjBZ3uWlHcFcqG"
		const stringWOeAy7d = "qEpAcIxY2Qcj8tRON6OwbdJ2k8FbhQ0eThiXP2Aqa"
		const uintMRwMxoz = BigInt("136")
		const stringmk4fgI5 = "b9I7MvV5Uwr35UYMp45RSSvyrBAU77EBRJ7LHnIT1NTcoAfn7kTEddkY1EdDs7usXF"
		const stringlSTQ04O = "3Ni439ZEk9yUJgWv8cWGCjlH78XwldxfEG77crhAJY"
		const uint8QSIlID1 = await UFragmentsUgOfDOS.decimals.call({from: accounts[3]});
		const stringZc4fu7S = await UFragmentsUgOfDOS.initialize.call(stringWOeAy7d, stringdrVyrPl, uintGCs51nM, {from: accounts[0]});
		const stringp369kg7 = await UFragmentsUgOfDOS.initialize.call(stringlSTQ04O, stringmk4fgI5, uintMRwMxoz, {from: accounts[3]});

		assert.equal(uint8QSIlID1, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsg5ueokt = await UFragments.new({from: accounts[1]});
		const intBIZKTpt = BigInt("-627")
		const addressxGw43Yw = accounts[1]
		const stringKnjw8NK = await UFragmentsg5ueokt.name.call({from: accounts[1]});
		const int256uI8zj96 = await UFragmentsg5ueokt.abs.call(intBIZKTpt, {from: accounts[2]});
		const boolkmI4y0e = await UFragmentsg5ueokt.isOwner.call({from: accounts[4]});
		const uint256lU0KfaA = await UFragmentsg5ueokt.balanceOf.call(addressxGw43Yw, {from: accounts[4]});
		const stringunjWOh5 = await UFragmentsg5ueokt.name.call({from: accounts[4]});

		assert.equal(stringKnjw8NK, "")
		await expect(UFragmentsg5ueokt.abs.call(intBIZKTpt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsDJEnxSy = await UFragments.new({from: accounts[3]});
		const addressE9I8QUX = accounts[2]
		const addressWDoZizQ = accounts[0]
		const addressAoxEBP0 = await UFragmentsDJEnxSy.owner.call({from: accounts[1]});
		const addressZsapLnf = await UFragmentsDJEnxSy.initialize.call(addressE9I8QUX, {from: accounts[0]});
		const addresstcDkWMs = await UFragmentsDJEnxSy.initialize.call(addressWDoZizQ, {from: accounts[1]});

		assert.equal(addressAoxEBP0, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsDJEnxSy.initialize.call(addressE9I8QUX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxv9O59B = await UFragments.new({from: accounts[5]});
		const addressvQnA24C = "0x0000000000000000000000000000000000000001"
		const intqstENN = BigInt("95")
		const uintRmY7vH2 = BigInt("137")
		const stringkWhg9cw = "jECgaG2vVEw7xnAETqNIBGl4l7QTlSUPUCGycz3PoaGdPVRJTtbV3EJzNaOpdT"
		const stringy1tYlt = "uSUWMGrN71tYFb59VqxAuuY9h4w6NvwHYgEPYNKdQhDFnm5CM2XvzSsxRsfAsfB1zJkp99pNxEhtGQ4rB4KNF4HQu82x9ooo"
		const uintvDVwOk6 = BigInt("1998")
		const addressmCE5FSz = accounts[2]
		const addressmfnKCtK = accounts[3]
		const intjW4k1TK = BigInt("-1643")
		const intB5hwuyH = BigInt("-1938")
		const uint256e1qR4Qt = await UFragmentsxv9O59B.balanceOf.call(addressvQnA24C, {from: accounts[0]});
		const int256PR0z7b = await UFragmentsxv9O59B.abs.call(intqstENN, {from: accounts[3]});
		const stringOzTE2fw = await UFragmentsxv9O59B.initialize.call(stringy1tYlt, stringkWhg9cw, uintRmY7vH2, {from: accounts[5]});
		const boolJWOErJg = await UFragmentsxv9O59B.transferFrom.call(addressmfnKCtK, addressmCE5FSz, uintvDVwOk6, {from: accounts[5]});
		const int256GPLcGMc = await UFragmentsxv9O59B.mul.call(intB5hwuyH, intjW4k1TK, {from: accounts[2]});
		const addressIRtQ1gf = await UFragmentsxv9O59B.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256e1qR4Qt, BigInt("0"))
		await expect(UFragmentsxv9O59B.abs.call(intqstENN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsCw59BRT = await UFragments.new({from: accounts[3]});
		const addressntpIKox = accounts[0]
		const addressutOylbh = accounts[1]
		const addressCP7tJ4j = accounts[5]
		const uint256hPQXHUt = await UFragmentsCw59BRT.allowance.call(addressutOylbh, addressntpIKox, {from: accounts[4]});
		const boolvvkHJAH = await UFragmentsCw59BRT.rebaseTimeInfo.call({from: accounts[3]});
		const addressDa0UDx4 = await UFragmentsCw59BRT.transferOwnership.call(addressCP7tJ4j, {from: accounts[0]});

		assert.equal(uint256hPQXHUt, BigInt("0"))
		await expect(UFragmentsCw59BRT.transferOwnership.call(addressCP7tJ4j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentswW3xHJX = await UFragments.new({from: accounts[0]});
		const uint6B2ff7 = BigInt("742")
		const addressJOOtr7G = accounts[1]
		const addressdn52YCe = accounts[3]
		const intXEpIK7J = BigInt("987")
		const intUh3xjrE = BigInt("-1869")
		const addressnr5B8zm = accounts[3]
		const boolQ6K4d9v = await UFragmentswW3xHJX.transferFrom.call(addressdn52YCe, addressJOOtr7G, uint6B2ff7, {from: accounts[5]});
		await UFragmentswW3xHJX.initializer.call({from: accounts[4]});
		await UFragmentswW3xHJX.renounceOwnership.call({from: accounts[2]});
		const int256mYY3LHX = await UFragmentswW3xHJX.div.call(intUh3xjrE, intXEpIK7J, {from: accounts[1]});
		const uint256I5exfN2 = await UFragmentswW3xHJX.balanceOf.call(addressnr5B8zm, {from: accounts[1]});

		await expect(UFragmentswW3xHJX.transferFrom.call(addressdn52YCe, addressJOOtr7G, uint6B2ff7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxv9O59B = await UFragments.new({from: accounts[5]});
		const addressRNRdMx5 = "0x0000000000000000000000000000000000000001"
		const uintlrlm5wA = BigInt("1582")
		const addressF16eEAJ = accounts[2]
		const intQsDiJ1Z = BigInt("95")
		const uintowkCBO = BigInt("137")
		const stringkWhg9cw = "jECgaG2vVEw7xnAETqNIBGl4l7QTlSUPUCGycz3PoaGdPVRJTtbV3EJzNaOpdT"
		const stringy1tYlt = "uSUWMGrN71tYFb59VqxAuuY9h4w6NvwHYgEPYNKdQhDFnm5CM2XvzSsxRsfAsfB1zJkp99pNxEhtGQ4rB4KNF4HQu82x9ooo"
		const uintN4WdYdH = BigInt("1998")
		const addressVhqMZrp = accounts[2]
		const addresswGF9NRi = accounts[3]
		const addresszmBXIwq = accounts[1]
		const intTuq14vJ = BigInt("-1643")
		const intHFKPGM1 = BigInt("-1943")
		const uint256e1qR4Qt = await UFragmentsxv9O59B.balanceOf.call(addressRNRdMx5, {from: accounts[0]});
		const boolC1nvuET = await UFragmentsxv9O59B.transfer.call(addressF16eEAJ, uintlrlm5wA, {from: accounts[5]});
		const int256PR0z7b = await UFragmentsxv9O59B.abs.call(intQsDiJ1Z, {from: accounts[3]});
		const stringOzTE2fw = await UFragmentsxv9O59B.initialize.call(stringy1tYlt, stringkWhg9cw, uintowkCBO, {from: accounts[5]});
		const boolJWOErJg = await UFragmentsxv9O59B.transferFrom.call(addresswGF9NRi, addressVhqMZrp, uintN4WdYdH, {from: accounts[5]});
		const uint256rzPK1HR = await UFragmentsxv9O59B.balanceOf.call(addresszmBXIwq, {from: accounts[0]});
		const int256GPLcGMc = await UFragmentsxv9O59B.mul.call(intHFKPGM1, intTuq14vJ, {from: accounts[2]});
		const addressIRtQ1gf = await UFragmentsxv9O59B.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256e1qR4Qt, BigInt("0"))
		await expect(UFragmentsxv9O59B.transfer.call(addressF16eEAJ, uintlrlm5wA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstF3Z3qR = await UFragments.new({from: accounts[2]});
		const intdbnjKE7 = BigInt("-1080")
		const intVYAjvwU = BigInt("103")
		const uint256hJ2KUGI = await UFragmentstF3Z3qR.calRebase.call({from: accounts[3]});
		const int256z3AuUR = await UFragmentstF3Z3qR.mul.call(intVYAjvwU, intdbnjKE7, {from: accounts[0]});

		await expect(UFragmentstF3Z3qR.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstF3Z3qR = await UFragments.new({from: accounts[2]});
		const intLXtt7Ds = BigInt("-1080")
		const intmC69iYj = BigInt("103")
		const uint256CjMIGxK = await UFragmentstF3Z3qR.totalSupply.call({from: accounts[2]});
		const int256z3AuUR = await UFragmentstF3Z3qR.mul.call(intmC69iYj, intLXtt7Ds, {from: accounts[0]});

		assert.equal(uint256CjMIGxK, BigInt("0"))
		await expect(UFragmentstF3Z3qR.mul.call(intmC69iYj, intLXtt7Ds, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})