const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringPZElbq1 = "40p18yQxfMygpkKdUHrKjFU5lV2SzghAEPEvvW56B"
		const stringPss3hhp = "Oof4UwvqkABzGr9vAaGuQfKeSpqAi5YDxJObTaGnkA7dJbe1BuLYDmLMVeXBCl2XeNYVmJKl3GugJrzUNpNREOPIilyG"
		const uintbrO0qU2 = BigInt("175")
		const FinalVYjsbP6 = await Final.new(stringPZElbq1, stringPss3hhp, uintbrO0qU2, {from: accounts[2]});
		const uintUGlMbe7 = BigInt("1426")
		const addressuIcOonp = "0x0000000000000000000000000000000000000001"
		const addressrRMcwOw = "0x0000000000000000000000000000000000000001"
		const boolEOK76uY = await FinalVYjsbP6.approve.call(addressuIcOonp, uintUGlMbe7, {from: accounts[0]});
		const uintk7YohHO = await FinalVYjsbP6.balanceOf.call(addressrRMcwOw, {from: "0x0000000000000000000000000000000000000001"});
		const stringOcV1Xrp = await FinalVYjsbP6.symbol.call({from: accounts[4]});

		assert.equal(boolEOK76uY, true)
		assert.equal(stringOcV1Xrp, "Oof4UwvqkABzGr9vAaGuQfKeSpqAi5YDxJObTaGnkA7dJbe1BuLYDmLMVeXBCl2XeNYVmJKl3GugJrzUNpNREOPIilyG")
		assert.equal(uintk7YohHO, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringXMyAVT4 = "BPwLAMPgKvrcfh9TnsppMvPYYnwREshe"
		const stringo1cbS9Y = "y8ddNGQjoNcuAu9cGl4fiNXEZ2TnDjdi6Qtg3HPh82o5AwiKsT6DG"
		const uintYOB096b = BigInt("1100")
		const FinalXVAsuS = await Final.new(stringXMyAVT4, stringo1cbS9Y, uintYOB096b, {from: accounts[3]});
		const uintNDOkJGx = BigInt("1630")
		const addressggoVlo = accounts[1]
		const uintyslxETL = BigInt("612")
		const addressesootqp = accounts[4]
		const uintcGGA4F = BigInt("696")
		const addressEWc4VRP = accounts[3]
		const stringi7WEOZ = await FinalXVAsuS.symbol.call({from: accounts[2]});
		const stringM5BE9wZ = await FinalXVAsuS.symbol.call({from: accounts[3]});
//		const boolf9UjBFR = await FinalXVAsuS.transfer.call(addressggoVlo, uintNDOkJGx, {from: accounts[4]});
//		const boolBFUDvo8 = await FinalXVAsuS.transfer.call(addressesootqp, uintyslxETL, {from: accounts[1]});
//		const bool6xYhem = await FinalXVAsuS.approve.call(addressEWc4VRP, uintcGGA4F, {from: accounts[0]});

		assert.equal(stringM5BE9wZ, "y8ddNGQjoNcuAu9cGl4fiNXEZ2TnDjdi6Qtg3HPh82o5AwiKsT6DG")
		assert.equal(stringi7WEOZ, "y8ddNGQjoNcuAu9cGl4fiNXEZ2TnDjdi6Qtg3HPh82o5AwiKsT6DG")
		await expect(FinalXVAsuS.transfer.call(addressggoVlo, uintNDOkJGx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringt6ltUtN = "d"
		const stringDCpvnYI = "OParE2shOGBOu2pPk2sSBRHezz9xW"
		const uintGuIDM04 = BigInt("11")
		const FinalYSQLWf = await Final.new(stringt6ltUtN, stringDCpvnYI, uintGuIDM04, {from: accounts[5]});
		const uintdJbvNWa = BigInt("2002")
		const addressRcprEdZ = accounts[3]
		const uintUCOlVh4 = BigInt("471")
		const addressTryR9RE = accounts[2]
		const uintP93Mlk = BigInt("60")
		const addressOfEhN0 = "0x0000000000000000000000000000000000000001"
		const addressoTdwNsG = accounts[3]
//		const boolET0kCAF = await FinalYSQLWf.increaseAllowance.call(addressRcprEdZ, uintdJbvNWa, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8oFHlWei = await FinalYSQLWf.decimals.call({from: accounts[4]});
//		const boolJEvt0KU = await FinalYSQLWf.approveAndCall.call(addressTryR9RE, uintUCOlVh4, {from: accounts[5]});
//		const booltKKLuV = await FinalYSQLWf.transferFrom.call(addressoTdwNsG, addressOfEhN0, uintP93Mlk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalYSQLWf.increaseAllowance.call(addressRcprEdZ, uintdJbvNWa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringj7zVx2c = "AQOiU8g8CSOC6ug3reoaEvMFC8LHInOau2d44iMuDGWzZNGTkoSS7"
		const stringM3Mz2Qd = "tQRFSjJuf5a7xxsglO5KQL3EbQ0w46X4"
		const uintjcX89V3 = BigInt("7")
		const FinalBYhEJ6n = await Final.new(stringj7zVx2c, stringM3Mz2Qd, uintjcX89V3, {from: "0x0000000000000000000000000000000000000001"});
		const addresst3VZD3v = "0x0000000000000000000000000000000000000001"
		const uintHOyerVB = BigInt("1921")
		const addressYZUG2br = accounts[1]
		const uintR3rrFo = await FinalBYhEJ6n.balanceOf.call(addresst3VZD3v, {from: accounts[2]});
		const boolBCUWCLF = await FinalBYhEJ6n.approve.call(addressYZUG2br, uintHOyerVB, {from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringh13nZa = "kPnCrVvnh888OLumN0WjU3AvtqFra2Jf8Opddm4Nw4MNA9inhjKdQrSPOzkV3tWpYL5YOXCz6NtMeDYBq"
		const stringMmCBD0 = "byWtqdz5sunc7pGMghECo6zvWIWAcSeYlkaVL8Sh3o2mG3stRrIoUOsCuyNQomUVa8ZxbvPriKMKFjs"
		const uintGJNVzPL = BigInt("117")
		const FinallFK3fQT = await Final.new(stringh13nZa, stringMmCBD0, uintGJNVzPL, {from: accounts[2]});
		const addressZjVXF0P = accounts[1]
		const uintIE3Ftd7 = BigInt("647")
		const addressRH4wRbl = accounts[2]
		const uintjUzLbn7 = BigInt("548")
		const addressM9J3YGV = accounts[3]
		const uintCX9fJzQ = BigInt("274")
		const addresskKId47 = accounts[4]
		const uintbV6j3w = BigInt("2014")
		const addressf3DzGBY = accounts[0]
		const uintCOt8jd0 = await FinallFK3fQT.balanceOf.call(addressZjVXF0P, {from: accounts[2]});
		const boolD9t7h5 = await FinallFK3fQT.transfer.call(addressRH4wRbl, uintIE3Ftd7, {from: accounts[2]});
//		const boolUWHqeg = await FinallFK3fQT.approveAndCall.call(addressM9J3YGV, uintjUzLbn7, {from: accounts[0]});
//		const booly7fCtry = await FinallFK3fQT.approve.call(addresskKId47, uintCX9fJzQ, {from: accounts[1]});
//		const stringitIoPO = await FinallFK3fQT.symbol.call({from: accounts[2]});
//		const boolLyWByU = await FinallFK3fQT.transfer.call(addressf3DzGBY, uintbV6j3w, {from: accounts[2]});

		assert.equal(boolD9t7h5, true)
		assert.equal(uintCOt8jd0, BigInt("0"))
		await expect(FinallFK3fQT.approveAndCall.call(addressM9J3YGV, uintjUzLbn7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringh13nZa = "kPnCrVvnh888OLumN0WjU3AvtqFra2Jf8Opddm4Nw4MNA9inhjKdQrSPOzkV3tWpYL5YOXCz6NtMeDYBq"
		const stringMmCBD0 = "byWtqdz5sunc7pGMghECo6zvWIWAcSeYlkaVL8Sh3o2mG3stRrIoUOsCuyNQomUVa8ZxbvPriKMKFjs"
		const uintipUZhR4 = BigInt("117")
		const FinallFK3fQT = await Final.new(stringh13nZa, stringMmCBD0, uintipUZhR4, {from: accounts[2]});
		const addressmYKG2E = accounts[1]
		const uintzhE9kxk = BigInt("1647")
		const addresstjF8CWC = accounts[4]
		const uinttkg0nuq = BigInt("79")
		const addresspOQUXAi = accounts[3]
		const addressOn7atud = accounts[0]
		const uintgZESIVj = BigInt("1807")
		const addressLTb3wfH = accounts[3]
		const uintaK8Ipq = BigInt("647")
		const addressJG3QyKo = accounts[2]
		const uintZFuBFBT = BigInt("548")
		const addresseQjzn5G = accounts[3]
		const uintyFyq9yJ = BigInt("2014")
		const addressxn8JqtU = accounts[0]
		const uintCOt8jd0 = await FinallFK3fQT.balanceOf.call(addressmYKG2E, {from: accounts[2]});
		const boolWOSDYyQ = await FinallFK3fQT.approveAndCall.call(addresstjF8CWC, uintzhE9kxk, {from: accounts[2]});
//		const boolmyBpUMx = await FinallFK3fQT.transferFrom.call(addressOn7atud, addresspOQUXAi, uinttkg0nuq, {from: accounts[3]});
//		const boolV5oL7DJ = await FinallFK3fQT.decreaseAllowance.call(addressLTb3wfH, uintgZESIVj, {from: accounts[3]});
//		const uint8oLbomQr = await FinallFK3fQT.decimals.call({from: accounts[4]});
//		const boolD9t7h5 = await FinallFK3fQT.transfer.call(addressJG3QyKo, uintaK8Ipq, {from: accounts[2]});
//		const boolUWHqeg = await FinallFK3fQT.approveAndCall.call(addresseQjzn5G, uintZFuBFBT, {from: accounts[0]});
//		const boolLyWByU = await FinallFK3fQT.transfer.call(addressxn8JqtU, uintyFyq9yJ, {from: accounts[2]});

		assert.equal(boolWOSDYyQ, true)
		assert.equal(uintCOt8jd0, BigInt("0"))
		await expect(FinallFK3fQT.transferFrom.call(addressOn7atud, addresspOQUXAi, uinttkg0nuq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPZElbq1 = "40p18yQxfMygpkKdUHrKjFU5lV2SzghAEPEvvW56B"
		const stringPss3hhp = "Oof4UwvqkABzGr9vAaGuQfKeSpqAi5YDxJObTaGnkA7dJbe1BuLYDmLMVeXBCl2XeNYVmJKl3GugJrzUNpNREOPIilyG"
		const uintASUySv1 = BigInt("175")
		const FinalVYjsbP6 = await Final.new(stringPZElbq1, stringPss3hhp, uintASUySv1, {from: accounts[2]});
		const uintyizBuhz = BigInt("1426")
		const addressDX3i86F = "0x0000000000000000000000000000000000000001"
		const addressRQhlXkH = "0x0000000000000000000000000000000000000001"
		const uintHQQxLr = BigInt("46")
		const addressFB3gNex = "0x0000000000000000000000000000000000000001"
		const addresskE41Dnz = accounts[0]
		const boolEOK76uY = await FinalVYjsbP6.approve.call(addressDX3i86F, uintyizBuhz, {from: accounts[0]});
//		const boolxxKwW5D = await FinalVYjsbP6.transferownership.call(addressRQhlXkH, {from: accounts[4]});
//		const boolqd1Jr91 = await FinalVYjsbP6.transferFrom.call(addresskE41Dnz, addressFB3gNex, uintHQQxLr, {from: accounts[5]});

		assert.equal(boolEOK76uY, true)
		await expect(FinalVYjsbP6.transferownership.call(addressRQhlXkH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPZElbq1 = "40p18yQxfMygpkKdUHrKjFU5lV2SzghAEPEvvW56B"
		const stringPss3hhp = "Oof4UwvqkABzGr9vAaGuQfKeSpqAi5YDxJObTaGnkA7dJbe1BuLYDmLMVeXBCl2XeNYVmJKl3GugJrzUNpNREOPIilyG"
		const uintGfGwFTh = BigInt("175")
		const FinalVYjsbP6 = await Final.new(stringPZElbq1, stringPss3hhp, uintGfGwFTh, {from: accounts[2]});
		const uintRkZMXuF = BigInt("0")
		const addressWmG9gWa = "0x0000000000000000000000000000000000000002"
		const addressSMusZu5 = accounts[1]
		const boolqd1Jr91 = await FinalVYjsbP6.transferFrom.call(addressSMusZu5, addressWmG9gWa, uintRkZMXuF, {from: accounts[5]});

		assert.equal(boolqd1Jr91, true)
	});
})