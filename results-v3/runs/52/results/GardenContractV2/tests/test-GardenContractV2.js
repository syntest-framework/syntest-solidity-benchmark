const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressXoZwSex = "0x0000000000000000000000000000000000000001"
		const addressYJthtI9 = accounts[5]
		const addressQesnXPB = accounts[3]
		const GardenContractV2FQ6y5PB = await GardenContractV2.new(addressXoZwSex, addressYJthtI9, addressQesnXPB, {from: accounts[0]});
		const uintRT8JeEe = BigInt("1799")
		const uintnxwob1r = BigInt("88")
		const stringKondFBc = "fasNu1CJUlg7cyNUIfYBeHjB2sYp1ioPlJBDwCWqdiKRDwrxQMSy5Tpdtv"
		const stringsOLBbcG = "QlpKBecJz3Tb93KyUJMZYSTbEczSLzS5ETOxuXtnxJ5"
		const addressOrVE9GA = accounts[5]
		const addressDzSTanQ = accounts[0]
		const stringznMCVV = "dWKHLHHE96ghPh3JWiUGxcfyEHD9abJ8j"
		const uintLZl316R = BigInt("12")
		const uintNZTnHhu = BigInt("91")
		const stringHDdwbqH = await GardenContractV2FQ6y5PB.decompose.call(stringKondFBc, uintnxwob1r, uintRT8JeEe, {from: accounts[5]});
		const uint256A16Nnf3 = await GardenContractV2FQ6y5PB.balanceOf.call(addressOrVE9GA, stringsOLBbcG, {from: accounts[3]});
		const addressIVabV62 = await GardenContractV2FQ6y5PB.renounceTokenOwner.call(addressDzSTanQ, {from: accounts[3]});
		const uint256A8BZXqt = await GardenContractV2FQ6y5PB.totalTLPGrowing.call(stringznMCVV, {from: accounts[1]});
		const uint8iXkiy37 = await GardenContractV2FQ6y5PB.setTimeStamp.call(uintNZTnHhu, uintLZl316R, {from: accounts[1]});

		await expect(GardenContractV2FQ6y5PB.decompose.call(stringKondFBc, uintnxwob1r, uintRT8JeEe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressyLzIdWu = accounts[1]
		const addressJQ52CLj = accounts[1]
		const addressgNfMtbJ = accounts[4]
		const GardenContractV2LhqJeio = await GardenContractV2.new(addressyLzIdWu, addressJQ52CLj, addressgNfMtbJ, {from: accounts[3]});
		const stringHh1IU2 = "Vk33sXBnMCsvudGOUJN983HDpQ4lDGdVyq"
		const uintcpbSd8n = BigInt("240")
		const uintiy8QLpU = BigInt("27")
		const boolFzpXaRk = true
		const uintX3aON6x = BigInt("29")
		const stringyEZ1vf5 = "DKdhapgeiUf3HpVjvwksfGu1efxBeGawKh2eYik3tnCJkrEighpRka3suuSEZSblGL8CKgEOyPiGkFot3xykULYvo0Pn"
		const uintDQ1fI1h = BigInt("1136")
		const uintqTXKiKZ = BigInt("18")
		const uint256JGbGFmd = await GardenContractV2LhqJeio.totalTLPGrowing.call(stringHh1IU2, {from: accounts[1]});
		const uint8OIf681 = await GardenContractV2LhqJeio.setTimeStamp.call(uintiy8QLpU, uintcpbSd8n, {from: accounts[2]});
		const uint256eK6CicS = await GardenContractV2LhqJeio.plant.call(uintDQ1fI1h, stringyEZ1vf5, uintX3aON6x, boolFzpXaRk, {from: accounts[3]});
		const uint256R3jhne = await GardenContractV2LhqJeio.getTotalrTLPHarvest.call(uintqTXKiKZ, {from: accounts[2]});

		await expect(GardenContractV2LhqJeio.totalTLPGrowing.call(stringHh1IU2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressDgVIX6 = accounts[1]
		const addressgK3ypJv = accounts[2]
		const addressBSxE9PN = accounts[4]
		const GardenContractV2uLQfkjB = await GardenContractV2.new(addressDgVIX6, addressgK3ypJv, addressBSxE9PN, {from: accounts[3]});
		const stringIjTjcwn = "fEwk1ziMyR63OEfO"
		const uintOR42Leu = BigInt("164")
		const stringSUeZBYA = "KB1qbCnvH3HcA5sFNp1RcWaweG1ukshlT8qtimuza3H"
		const addresswCbnFMZ = accounts[4]
		const uintq5KxR4g = BigInt("15")
		const stringu9hPumB = "7WJTw93Tx7lPcrK3793VRFVSKKuO0"
		const addressyjM7ue = accounts[2]
		const uintb1xmXTW = BigInt("357")
		const uinthSTNK1O = BigInt("211")
		const stringa8kWlfe = "pw68dqrzguuksM5FHBbdU2mTnWOBfqJYohmYylj3SvqCqsJPpyk1YjhoE7b77T4dD0BZ"
		const uintYJrNOym = BigInt("173")
		const uintsf1Gw2x = BigInt("147")
		const uint256wqIgrMD = await GardenContractV2uLQfkjB.totalTLPBurnt.call(stringIjTjcwn, {from: accounts[5]});
		const uint256lYvpZVy = await GardenContractV2uLQfkjB.growthRemaining.call(addresswCbnFMZ, stringSUeZBYA, uintOR42Leu, {from: accounts[2]});
		const uint256Y1MXE4p = await GardenContractV2uLQfkjB.growthRemaining.call(addressyjM7ue, stringu9hPumB, uintq5KxR4g, {from: accounts[5]});
		const stringPPKD9fM = await GardenContractV2uLQfkjB.decompose.call(stringa8kWlfe, uinthSTNK1O, uintb1xmXTW, {from: accounts[1]});
		const uint8ZPZDzDQ = await GardenContractV2uLQfkjB.setTimeStamp.call(uintsf1Gw2x, uintYJrNOym, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2uLQfkjB.totalTLPBurnt.call(stringIjTjcwn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQUiHww2 = accounts[5]
		const addressjIngID3 = "0x0000000000000000000000000000000000000001"
		const addressIfmiim = accounts[0]
		const GardenContractV2A6cgcx = await GardenContractV2.new(addressQUiHww2, addressjIngID3, addressIfmiim, {from: accounts[2]});
		const booledAgpoF = true
		const uinthxZ7mO4 = BigInt("212")
		const stringr0eFyrc = "Pea8pAPXMHGxH474prYKP2mEiC1Cwevcf8w0chyLomD46LdO10WiXg5WSon2otcR296O2goVMVR"
		const uintQAvTpc = BigInt("691")
		const uintEdIdyhU = BigInt("130")
		const string5rFx67 = "GJ6J6DH2x5NgSUYJD2BsAyYudMGKtVrRabarAKYMxxgwtgSpGc4Q3q1"
		const uintGG2UWE1 = BigInt("1939")
		const uintgSEBnEf = BigInt("230")
		const stringRYQi07b = "mkNPbzzly9"
		const uintUix3JAj = BigInt("154")
		const uintD07lfgr = BigInt("221")
		const uintINUFtiE = BigInt("244")
		const uintFIhXjjs = BigInt("72")
		const uint256ehO20za = await GardenContractV2A6cgcx.plant.call(uintQAvTpc, stringr0eFyrc, uinthxZ7mO4, booledAgpoF, {from: accounts[0]});
		const stringuyB0pD5 = await GardenContractV2A6cgcx.claimDecompose.call(string5rFx67, uintEdIdyhU, {from: accounts[2]});
		const stringHFV98Cr = await GardenContractV2A6cgcx.decompose.call(stringRYQi07b, uintgSEBnEf, uintGG2UWE1, {from: accounts[1]});
		const uint8XhejLsV = await GardenContractV2A6cgcx.setTimeStamp.call(uintD07lfgr, uintUix3JAj, {from: accounts[1]});
		const uint8Ipm2jgV = await GardenContractV2A6cgcx.zeroHoldings.call(uintFIhXjjs, uintINUFtiE, {from: accounts[2]});

		await expect(GardenContractV2A6cgcx.plant.call(uintQAvTpc, stringr0eFyrc, uinthxZ7mO4, booledAgpoF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGy1L6o = accounts[1]
		const addressAkQEWaO = accounts[3]
		const address6jVij1 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2bE2RaDk = await GardenContractV2.new(addressGy1L6o, addressAkQEWaO, address6jVij1, {from: accounts[0]});
		const uintejLnSG = BigInt("221")
		const stringcNhAco4 = "s7vrvd3k1IVAUOCUKf5zrS2jq7OIb2Q9j64MIRrXw1kPe3Tp8RDRFXq78LexjVQ8FXKlYfptcXBejWDvsSAbjoi1"
		const addressKRsSbdJ = accounts[2]
		const uintdtIGSA6 = BigInt("84")
		const stringBcCBROl = "JBWieiurqrNMx4fRmKTaY55IUO5JMQrw3SBgQ12AvDYL5qDflnAClgHHR"
		const stringR08iBN9 = "gkHFnLNJGJ3eJIMaHWQ1XRLcxvO1vxVn5EOqi9eVem"
		const addressPvDlNl6 = accounts[1]
		const uint256akXQAQk = await GardenContractV2bE2RaDk.getTotalsTLPHarvest.call(uintejLnSG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XffjIf7 = await GardenContractV2bE2RaDk.balanceOf.call(addressKRsSbdJ, stringcNhAco4, {from: accounts[2]});
		await GardenContractV2bE2RaDk.totalBedSupply.call(stringBcCBROl, uintdtIGSA6, {from: accounts[2]});
		const uint2569fXkEo = await GardenContractV2bE2RaDk.balanceOf.call(addressPvDlNl6, stringR08iBN9, {from: accounts[0]});

		await expect(GardenContractV2bE2RaDk.getTotalsTLPHarvest.call(uintejLnSG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvP3xxO8 = accounts[3]
		const addressQCHqQEk = "0x0000000000000000000000000000000000000001"
		const addressl2LcgI0 = accounts[5]
		const GardenContractV2NzF4vVw = await GardenContractV2.new(addressvP3xxO8, addressQCHqQEk, addressl2LcgI0, {from: accounts[2]});
		const stringv4KJU9 = "OfiitNPeRpAe0wWygqqAW5hyhyalkKYb8RlVV64Y4HPOrfEdOz1331tkCU6N4cHIlLiwaHo6m2eKymEJ5WvMmRN5laVFapeoW6"
		const boolY8gcdZT = true
		const uintu2fCoVb = BigInt("107")
		const stringJw3MNbt = "fonFlh"
		const uintZrkjOaH = BigInt("687")
		const uintkSAJYtx = BigInt("219")
		const uintPMUnRtU = BigInt("107")
		const boolps9f52 = true
		const uintjcXrl4 = BigInt("182")
		const stringswZN0Yj = "p1UssvoWV"
		const uintZnQ1XLL = BigInt("812")
		const stringCXK2AKs = "2Jdu7YuCbOxM6OLFfabkL9r1jE1bnEUgle05ORtMpWdKE99TiFCTUwR2liuKO5ligyHpd5AzzyxYoY"
		const addressrSsrnCf = accounts[2]
		const stringvAfeOI4 = await GardenContractV2NzF4vVw.harvestAllBeds.call(stringv4KJU9, {from: accounts[5]});
		const uint256ATlDe5c = await GardenContractV2NzF4vVw.plant.call(uintZrkjOaH, stringJw3MNbt, uintu2fCoVb, boolY8gcdZT, {from: accounts[0]});
		const uint8bzuH9SP = await GardenContractV2NzF4vVw.zeroHoldings.call(uintPMUnRtU, uintkSAJYtx, {from: accounts[0]});
		const uint256SqpkN0B = await GardenContractV2NzF4vVw.plant.call(uintZnQ1XLL, stringswZN0Yj, uintjcXrl4, boolps9f52, {from: accounts[0]});
		const uint256Ixf9DPE = await GardenContractV2NzF4vVw.balanceOf.call(addressrSsrnCf, stringCXK2AKs, {from: accounts[4]});

		await expect(GardenContractV2NzF4vVw.harvestAllBeds.call(stringv4KJU9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressScDQb7U = accounts[2]
		const addressXLiRP5 = accounts[1]
		const addressyEpidj5 = accounts[0]
		const GardenContractV2snkTYFR = await GardenContractV2.new(addressScDQb7U, addressXLiRP5, addressyEpidj5, {from: accounts[2]});
		const addressfVvLty = accounts[0]
		const stringPgS9YQ6 = "JWLmugnaj12kfX9cixUsVIjf"
		const string9y3rKa = "aIHduf"
		const addressykp9ece = await GardenContractV2snkTYFR.renounceTokenOwner.call(addressfVvLty, {from: accounts[5]});
		const uint256nHAwB8M = await GardenContractV2snkTYFR.totalTLPGrown.call(stringPgS9YQ6, {from: accounts[1]});
		const stringFYTdqSS = await GardenContractV2snkTYFR.harvestAllBeds.call(string9y3rKa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2snkTYFR.renounceTokenOwner.call(addressfVvLty, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressmiyRna9 = "0x0000000000000000000000000000000000000001"
		const addressk6WtfhC = accounts[5]
		const addressdLmcpZf = accounts[3]
		const GardenContractV2FQ6y5PB = await GardenContractV2.new(addressmiyRna9, addressk6WtfhC, addressdLmcpZf, {from: accounts[0]});
		const addresshz6nL40 = accounts[0]
		const stringOiZVfsI = "NkVeTo0pgeaURo71aoslnf4Dz7lEC"
		const uintv815D6V = BigInt("1799")
		const uintJc8Zid6 = BigInt("88")
		const stringKondFBc = "fasNu1CJUlg7cyNUIfYBeHjB2sYp1ioPlJBDwCWqdiKRDwrxQMSy5Tpdtv"
		const stringsOLBbcG = "QlpKBecJz3Tb93KyUJMZYSTbEczSLzS5ETOxuXtnxJ5"
		const addressbTTKQbK = accounts[5]
		const stringp2oonHV = "Jgt5eP7sdo4OPPPSJ"
		const addressrugmpJV = accounts[0]
		const stringznMCVV = "dWKHLHHE96ghPh3JWiUGxcfyEHD9abJ8j"
		const addressmych97I = await GardenContractV2FQ6y5PB.changeBenefitiary.call(addresshz6nL40, {from: accounts[0]});
		const uint256Z7OnbBz = await GardenContractV2FQ6y5PB.totalTLPGrowing.call(stringOiZVfsI, {from: accounts[0]});
		const stringHDdwbqH = await GardenContractV2FQ6y5PB.decompose.call(stringKondFBc, uintJc8Zid6, uintv815D6V, {from: accounts[5]});
		const uint256A16Nnf3 = await GardenContractV2FQ6y5PB.balanceOf.call(addressbTTKQbK, stringsOLBbcG, {from: accounts[3]});
		const uint256vOJQAMv = await GardenContractV2FQ6y5PB.totalTLPGrowing.call(stringp2oonHV, {from: accounts[5]});
		const addressIVabV62 = await GardenContractV2FQ6y5PB.renounceTokenOwner.call(addressrugmpJV, {from: accounts[3]});
		const uint256A8BZXqt = await GardenContractV2FQ6y5PB.totalTLPGrowing.call(stringznMCVV, {from: accounts[1]});

		await expect(GardenContractV2FQ6y5PB.totalTLPGrowing.call(stringOiZVfsI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressApa7Gml = "0x0000000000000000000000000000000000000001"
		const addressQEE09qd = accounts[5]
		const addressR1x85M0 = accounts[3]
		const GardenContractV2FQ6y5PB = await GardenContractV2.new(addressApa7Gml, addressQEE09qd, addressR1x85M0, {from: accounts[0]});
		const uintmmj7VOe = BigInt("61")
		const stringrFSKq1n = "G9LuiAR3RelVmt7Z94hOIEn6JWiQuyPAsPTyMEzE"
		const uintb93QW4E = BigInt("253")
		const stringb22Y7QX = "L8OTTaVe2ZKECsOjXEAKzY"
		const uintCiwFTP = BigInt("1799")
		const uintBuiH3mc = BigInt("88")
		const stringKondFBc = "fasNu1CJUlg7cyNUIfYBeHjB2sYp1ioPlJBDwCWqdiKRDwrxQMSy5Tpdtv"
		const stringsOLBbcG = "QlpKBecJz3Tb93KyUJMZYSTbEczSLzS5ETOxuXtnxJ5"
		const addressnHPhWzz = accounts[5]
		const addressTucRbfv = accounts[0]
		const stringznMCVV = "dWKHLHHE96ghPh3JWiUGxcfyEHD9abJ8j"
		const uintz5OdlQg = BigInt("12")
		const uintWxJH52i = BigInt("91")
		const stringEBfKOnS = await GardenContractV2FQ6y5PB.harvest.call(stringrFSKq1n, uintmmj7VOe, {from: accounts[0]});
		const stringnQ1Ri2Y = await GardenContractV2FQ6y5PB.claimDecompose.call(stringb22Y7QX, uintb93QW4E, {from: accounts[1]});
		const stringHDdwbqH = await GardenContractV2FQ6y5PB.decompose.call(stringKondFBc, uintBuiH3mc, uintCiwFTP, {from: accounts[5]});
		const uint256A16Nnf3 = await GardenContractV2FQ6y5PB.balanceOf.call(addressnHPhWzz, stringsOLBbcG, {from: accounts[3]});
		const addressIVabV62 = await GardenContractV2FQ6y5PB.renounceTokenOwner.call(addressTucRbfv, {from: accounts[3]});
		const uint256A8BZXqt = await GardenContractV2FQ6y5PB.totalTLPGrowing.call(stringznMCVV, {from: accounts[1]});
		const uint8iXkiy37 = await GardenContractV2FQ6y5PB.setTimeStamp.call(uintWxJH52i, uintz5OdlQg, {from: accounts[1]});

		await expect(GardenContractV2FQ6y5PB.harvest.call(stringrFSKq1n, uintmmj7VOe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresse2tqNrT = accounts[4]
		const addressIMraqb = accounts[0]
		const addressCDDeLJE = "0x0000000000000000000000000000000000000001"
		const GardenContractV2ilKByxl = await GardenContractV2.new(addresse2tqNrT, addressIMraqb, addressCDDeLJE, {from: "0x0000000000000000000000000000000000000001"});
		const addresssApeflF = accounts[1]
		const uintmlBAjUF = BigInt("526")
		const uintiscA8ai = BigInt("116")
		const uintw0pUAWx = BigInt("210")
		const addressYrJILdI = accounts[3]
		const stringZUMePtN = "lJpmQw6x5o5mT06RRLlMFLnb5eDB3oSBhaWe9RXO3d3ET2LSEuVke6pKzSTyX9XxAZHEZSnQEvcCGGsrJuEVjAwN1W9t7Des6"
		const addressuIHFh1L = await GardenContractV2ilKByxl.changeOwner.call(addresssApeflF, {from: accounts[2]});
		const uint8tKTGtp5 = await GardenContractV2ilKByxl.operationBurnMint.call(uintw0pUAWx, uintiscA8ai, uintmlBAjUF, {from: accounts[4]});
		const addressOupzeh6 = await GardenContractV2ilKByxl.renounceTokenOwner.call(addressYrJILdI, {from: accounts[5]});
		const uint256GCa3Hff = await GardenContractV2ilKByxl.totalTLPDecomposed.call(stringZUMePtN, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addresspHHfBiJ = accounts[3]
		const addressDrV0gf = accounts[2]
		const addressCETyn8 = accounts[4]
		const GardenContractV2zd2TnHG = await GardenContractV2.new(addresspHHfBiJ, addressDrV0gf, addressCETyn8, {from: accounts[2]});
		const addressX78ddAs = accounts[5]
		const uintpHkLErp = BigInt("128")
		const stringmNO9N2E = "V918zKd"
		const addressdL8RzKN = accounts[1]
		const addresskR1K9n = await GardenContractV2zd2TnHG.changeBenefitiary.call(addressX78ddAs, {from: accounts[2]});
		const uint256AYFnM0n = await GardenContractV2zd2TnHG.timeUntilNextTLP.call(stringmNO9N2E, uintpHkLErp, {from: accounts[2]});
		const addressYSp0sKL = await GardenContractV2zd2TnHG.changeBenefitiary.call(addressdL8RzKN, {from: accounts[0]});

		await expect(GardenContractV2zd2TnHG.timeUntilNextTLP.call(stringmNO9N2E, uintpHkLErp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMixDy2 = "0x0000000000000000000000000000000000000001"
		const addresstTXNJ1R = accounts[5]
		const addressu5IISpe = accounts[3]
		const GardenContractV2FQ6y5PB = await GardenContractV2.new(addressMixDy2, addresstTXNJ1R, addressu5IISpe, {from: accounts[0]});
		const uintqT5tO3z = BigInt("253")
		const stringb22Y7QX = "L8OTTaVe2ZKECsOjXEAKzY"
		const uinttNWK2t8 = BigInt("1799")
		const uintBv1XBMG = BigInt("88")
		const stringKondFBc = "fasNu1CJUlg7cyNUIfYBeHjB2sYp1ioPlJBDwCWqdiKRDwrxQMSy5Tpdtv"
		const stringsOLBbcG = "QlpKBecJz3Tb93KyUJMZYSTbEczSLzS5ETOxuXtnxJ5"
		const addressONPYLU = accounts[5]
		const addressWIjRqfD = "0x0000000000000000000000000000000000000001"
		const stringznMCVV = "dWKHLHHE96ghPh3JWiUGxcfyFHD9abJ8j"
		const uintrW5GX4z = BigInt("12")
		const uintAmKaeji = BigInt("91")
		const stringnQ1Ri2Y = await GardenContractV2FQ6y5PB.claimDecompose.call(stringb22Y7QX, uintqT5tO3z, {from: accounts[1]});
		const stringHDdwbqH = await GardenContractV2FQ6y5PB.decompose.call(stringKondFBc, uintBv1XBMG, uinttNWK2t8, {from: accounts[5]});
		const uint256A16Nnf3 = await GardenContractV2FQ6y5PB.balanceOf.call(addressONPYLU, stringsOLBbcG, {from: accounts[3]});
		const addressIVabV62 = await GardenContractV2FQ6y5PB.renounceTokenOwner.call(addressWIjRqfD, {from: accounts[3]});
		const uint256A8BZXqt = await GardenContractV2FQ6y5PB.totalTLPGrowing.call(stringznMCVV, {from: accounts[1]});
		const uint8iXkiy37 = await GardenContractV2FQ6y5PB.setTimeStamp.call(uintAmKaeji, uintrW5GX4z, {from: accounts[1]});

		await expect(GardenContractV2FQ6y5PB.claimDecompose.call(stringb22Y7QX, uintqT5tO3z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVvuONU = accounts[3]
		const addressJ7VhAs5 = accounts[3]
		const addressn0sYAad = "0x0000000000000000000000000000000000000001"
		const GardenContractV2HnE2ioQ = await GardenContractV2.new(addressVvuONU, addressJ7VhAs5, addressn0sYAad, {from: accounts[4]});
		const uintd3LYYNI = BigInt("639")
		const uintp2AiZZL = BigInt("230")
		const uinty8bMPOy = BigInt("234")
		const boolweVIQB = true
		const uintiBH5uEA = BigInt("251")
		const stringVZFzpOO = "K36vIugfmGvnGMlK5i5EAoMr48M0ypM03Ph1KEf6SrRBDhRr"
		const uintTcyUSlA = BigInt("763")
		const uint8ZzvEXs = await GardenContractV2HnE2ioQ.operationBurnMint.call(uinty8bMPOy, uintp2AiZZL, uintd3LYYNI, {from: accounts[1]});
		const uint256Son0Hy = await GardenContractV2HnE2ioQ.plant.call(uintTcyUSlA, stringVZFzpOO, uintiBH5uEA, boolweVIQB, {from: accounts[2]});

		await expect(GardenContractV2HnE2ioQ.operationBurnMint.call(uinty8bMPOy, uintp2AiZZL, uintd3LYYNI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAapLBad = accounts[3]
		const addressqcA9gDr = accounts[5]
		const addressmr6e1jG = accounts[5]
		const GardenContractV2BDDe5sv = await GardenContractV2.new(addressAapLBad, addressqcA9gDr, addressmr6e1jG, {from: accounts[0]});
		const stringGy4ldsz = "ytIjdfKLqF5hYVx69d2fm6SfRCez7sm0kMxpC9ECI66bkTPfB1jHAyJ7RgdROyxelC5JRGh7t5shcAu354xtQ7rSyw"
		const uintONmikYZ = BigInt("118")
		const uintCwYeQDd = BigInt("75")
		const stringuXiIGAx = "wlAIrtDejlvPww1zogTtXXm74RBkP96rJ98QOqmfQU6t2gUcxtOmw2ua2Y1BnZFrgfxtmjNh3vknk"
		const uint256jpa2Ae6 = await GardenContractV2BDDe5sv.totalTLPGrown.call(stringGy4ldsz, {from: accounts[3]});
		const uint256HqPQMYu = await GardenContractV2BDDe5sv.getTotalsTLPHarvest.call(uintONmikYZ, {from: accounts[0]});
		const stringD7NVQFp = await GardenContractV2BDDe5sv.withdraw.call(stringuXiIGAx, uintCwYeQDd, {from: accounts[1]});

		await expect(GardenContractV2BDDe5sv.totalTLPGrown.call(stringGy4ldsz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvm34EjB = accounts[3]
		const addressRn9eyLM = accounts[4]
		const addressSHC4s5y = accounts[2]
		const GardenContractV2vPZabuo = await GardenContractV2.new(addressvm34EjB, addressRn9eyLM, addressSHC4s5y, {from: accounts[1]});
		const uintLWsrrv = BigInt("128")
		const stringGL98LK = "j2mQrvucfMSdJ50otWC2yGwAVi"
		const stringL0taUHA = "L84Wyibs47CQNKZf4xgGA1yLoVVm8Wicc32klLwQDSdidNbIRzpFBZXQwIgeao3B"
		const addressLtt2CWz = accounts[0]
		const addressudREL1v = accounts[2]
		await GardenContractV2vPZabuo.totalBedSupply.call(stringGL98LK, uintLWsrrv, {from: accounts[4]});
		const uint256KEbS119 = await GardenContractV2vPZabuo.totalTLPGrowing.call(stringL0taUHA, {from: accounts[2]});
		const addressg9carOi = await GardenContractV2vPZabuo.addTokenOwner.call(addressudREL1v, addressLtt2CWz, {from: accounts[3]});

		await expect(GardenContractV2vPZabuo.totalBedSupply.call(stringGL98LK, uintLWsrrv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressogvLbpH = accounts[3]
		const addressVEXcSzL = accounts[3]
		const addressAWq5t89 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2HnE2ioQ = await GardenContractV2.new(addressogvLbpH, addressVEXcSzL, addressAWq5t89, {from: accounts[4]});
		const uintIWBUPk = BigInt("232")
		const stringlnCFUTE = "C5PzGLEhsR9R9FOE3dcxornCrauyPvTr7uVvszCYCgHWH6rW85XYFlFqRvynMgj9ryBPUHnq9Tm"
		const address7ji2Ml = accounts[0]
		const addressyzK8L6r = accounts[1]
		const uintUvDljzs = BigInt("431")
		const uintjraBI4H = BigInt("194")
		const stringQufWaA = "An5OmdfvHzp2iu6o0O1hzdCeFs8EaYmvPUIF76E8F6Jks1pYetuwGEwK1ErUhrr4AYUMeSaWdIoWrEFAAlqijm4erzzASUP4fXk"
		const addresszClfEmD = accounts[4]
		const uint256XbNFv31 = await GardenContractV2HnE2ioQ.growthRemaining.call(address7ji2Ml, stringlnCFUTE, uintIWBUPk, {from: accounts[5]});
		const addressFhHMfSk = await GardenContractV2HnE2ioQ.changeOwner.call(addressyzK8L6r, {from: accounts[2]});
		const stringwhuTc84 = await GardenContractV2HnE2ioQ.decompose.call(stringQufWaA, uintjraBI4H, uintUvDljzs, {from: accounts[2]});
		const addressxadKPo = await GardenContractV2HnE2ioQ.changeBenefitiary.call(addresszClfEmD, {from: accounts[0]});

		await expect(GardenContractV2HnE2ioQ.growthRemaining.call(address7ji2Ml, stringlnCFUTE, uintIWBUPk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshBw2lq = accounts[1]
		const addressTI0UN1q = accounts[2]
		const addresse8XOtzb = "0x0000000000000000000000000000000000000001"
		const GardenContractV2NRjXHE = await GardenContractV2.new(addresshBw2lq, addressTI0UN1q, addresse8XOtzb, {from: accounts[1]});
		const uintbES4Kof = BigInt("17")
		const stringrQhyU4 = "xEsp7DC5UTQqVHN8DjPWMUPLALh7EGQSNcA6"
		const uinttV1mYqN = BigInt("130")
		const stringa1eN3F = "QAK9P"
		const string3RX5hm = "QrAZAJ2ePzOVvbLDhVPsvwccNoYxB4o57dbbFwBOUc"
		const stringfSbQClP = await GardenContractV2NRjXHE.withdraw.call(stringrQhyU4, uintbES4Kof, {from: accounts[4]});
		const stringbHsYFdA = await GardenContractV2NRjXHE.claimDecompose.call(stringa1eN3F, uinttV1mYqN, {from: accounts[4]});
		const stringdcwqEaC = await GardenContractV2NRjXHE.harvestAllBeds.call(string3RX5hm, {from: accounts[1]});

		await expect(GardenContractV2NRjXHE.withdraw.call(stringrQhyU4, uintbES4Kof, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYQ44ZGq = accounts[3]
		const addresskyt0nLo = accounts[3]
		const addressYCisgE = "0x0000000000000000000000000000000000000001"
		const GardenContractV2HnE2ioQ = await GardenContractV2.new(addressYQ44ZGq, addresskyt0nLo, addressYCisgE, {from: accounts[4]});
		const stringAiOwEUz = "AOihcOqVxf42CLUq4zAOO"
		const addressmSFG0eB = accounts[1]
		const uintvP2zl1M = BigInt("431")
		const uintWYBrYWh = BigInt("194")
		const stringQufWaA = "An5OmdfvHzp2iu6o0O1hzdCeFs8EaYmvPUIF76E8F6Jks1pYetuwGEwK1ErUhrr4AYUMeSaWdIoWrEFAAlqijm4erzzASUP4fXk"
		const addressmssgvOR = accounts[4]
		const addressqXsAGUI = accounts[3]
		const uint2569ojIWF = await GardenContractV2HnE2ioQ.balanceOf.call(addressmSFG0eB, stringAiOwEUz, {from: accounts[3]});
		const stringwhuTc84 = await GardenContractV2HnE2ioQ.decompose.call(stringQufWaA, uintWYBrYWh, uintvP2zl1M, {from: accounts[2]});
		const addressi97Hzkr = await GardenContractV2HnE2ioQ.changeBenefitiary.call(addressmssgvOR, {from: accounts[0]});
		const addressxadKPo = await GardenContractV2HnE2ioQ.changeBenefitiary.call(addressqXsAGUI, {from: accounts[0]});

		await expect(GardenContractV2HnE2ioQ.balanceOf.call(addressmSFG0eB, stringAiOwEUz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressjSgOSet = accounts[1]
		const addressNovNw0t = "0x0000000000000000000000000000000000000001"
		const addressSkui9p7 = accounts[2]
		const GardenContractV2hfypU7 = await GardenContractV2.new(addressjSgOSet, addressNovNw0t, addressSkui9p7, {from: accounts[1]});
		const stringzv3rt1l = "Vulp41uLBQdPdCJ9eJ2WMDd2In3AHcXn95yP4KBo8BP9gACl79vR6o4WTofGA1"
		const uint98qwYl = BigInt("8")
		const stringnGaE7iG = "XH5PgmFsL3o3wFQo7cNEsrXGIbfXslbazH7zwrN2XsMoJWcheHJ4uF6eofDEOoPTbx"
		const strings0U0ChW = "VEvAjXWbhDUp6lvWuJ2dnFiRBTrRoYleTW3uc3REM33EY4A0vyqMmosEVPTnlF"
		const uintA3TY3r = BigInt("195")
		const uint256litjeY5 = await GardenContractV2hfypU7.totalTLPDecomposed.call(stringzv3rt1l, {from: accounts[4]});
		const stringgV3AUbn = await GardenContractV2hfypU7.harvest.call(stringnGaE7iG, uint98qwYl, {from: "0x0000000000000000000000000000000000000001"});
		const stringeLyOue = await GardenContractV2hfypU7.harvestAllBeds.call(strings0U0ChW, {from: accounts[1]});
		const uint256hPWhuwW = await GardenContractV2hfypU7.getTotalrTLPHarvest.call(uintA3TY3r, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2hfypU7.totalTLPDecomposed.call(stringzv3rt1l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressg4iYVCP = accounts[3]
		const addressIDF3bK = accounts[3]
		const addresslC4NyV0 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2HnE2ioQ = await GardenContractV2.new(addressg4iYVCP, addressIDF3bK, addresslC4NyV0, {from: accounts[4]});
		const addressDw5jPEu = accounts[4]
		const uintpS9INKP = BigInt("61")
		const boolweVIQB = true
		const uintZZQd4ud = BigInt("255")
		const stringVZFzpOO = "K36vIugfmGvnGMlK5i5EAoMr48M0ypM03Ph1KEf6SrRBDhRr"
		const uintcsgMVao = BigInt("763")
		const addressMXPAn67 = accounts[3]
		const addresslwVAO3 = await GardenContractV2HnE2ioQ.renounceTokenOwner.call(addressDw5jPEu, {from: accounts[4]});
		const uint256QMJ3Nyv = await GardenContractV2HnE2ioQ.getTotalrTLPHarvest.call(uintpS9INKP, {from: accounts[3]});
		const uint256Son0Hy = await GardenContractV2HnE2ioQ.plant.call(uintcsgMVao, stringVZFzpOO, uintZZQd4ud, boolweVIQB, {from: accounts[2]});
		const addressxadKPo = await GardenContractV2HnE2ioQ.changeBenefitiary.call(addressMXPAn67, {from: accounts[0]});

		await expect(GardenContractV2HnE2ioQ.renounceTokenOwner.call(addressDw5jPEu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLnskIGo = accounts[1]
		const addressDRguIe9 = accounts[2]
		const addresslS2oIsq = "0x0000000000000000000000000000000000000001"
		const GardenContractV2NRjXHE = await GardenContractV2.new(addressLnskIGo, addressDRguIe9, addresslS2oIsq, {from: accounts[1]});
		const stringJ78ZqZC = "Yq2DPKumanX4XHn4cQfFSmcMjSVs8n5fzW"
		const uintxnBrWd7 = BigInt("17")
		const stringrQhyU4 = "xEsp7DC5UTQqVHN8DjPWMUPLALh7EGQSNcA6"
		const uintbvv9MlC = BigInt("130")
		const stringa1eN3F = "QAK9P"
		const uintlv97Vcu = BigInt("152")
		const uinttB9JAKS = BigInt("129")
		const uintouCQeY = BigInt("198")
		const uint256pPku8S8 = await GardenContractV2NRjXHE.totalGardenSupply.call(stringJ78ZqZC, {from: accounts[1]});
		const stringfSbQClP = await GardenContractV2NRjXHE.withdraw.call(stringrQhyU4, uintxnBrWd7, {from: accounts[4]});
		const stringbHsYFdA = await GardenContractV2NRjXHE.claimDecompose.call(stringa1eN3F, uintbvv9MlC, {from: accounts[4]});
		const uint8NIU32KD = await GardenContractV2NRjXHE.operationBurnMint.call(uintouCQeY, uinttB9JAKS, uintlv97Vcu, {from: accounts[0]});

		await expect(GardenContractV2NRjXHE.totalGardenSupply.call(stringJ78ZqZC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLsW8azi = accounts[3]
		const addressnl600Jx = accounts[3]
		const addressHTQ55pD = "0x0000000000000000000000000000000000000001"
		const GardenContractV2HnE2ioQ = await GardenContractV2.new(addressLsW8azi, addressnl600Jx, addressHTQ55pD, {from: accounts[4]});
		const uintQ42cOts = BigInt("61")
		const boolweVIQB = true
		const uintgS58W94 = BigInt("251")
		const stringVZFzpOO = "K36vIugfmGvnGMlK5i5EAoMr48M0ypM03Ph1KEf6SrRBDhRr"
		const uintFNl03q1 = BigInt("763")
		const addressPMXAkJd = accounts[5]
		const uint256JJpqEFO = await GardenContractV2HnE2ioQ.getTotalrTLPHarvest.call(uintQ42cOts, {from: accounts[4]});
		const uint256Son0Hy = await GardenContractV2HnE2ioQ.plant.call(uintFNl03q1, stringVZFzpOO, uintgS58W94, boolweVIQB, {from: accounts[2]});
		const addressxadKPo = await GardenContractV2HnE2ioQ.changeBenefitiary.call(addressPMXAkJd, {from: accounts[0]});

		await expect(GardenContractV2HnE2ioQ.getTotalrTLPHarvest.call(uintQ42cOts, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressT9xS0q = accounts[1]
		const addressWE4FOGh = "0x0000000000000000000000000000000000000001"
		const addressvQ7xipK = accounts[2]
		const GardenContractV2hfypU7 = await GardenContractV2.new(addressT9xS0q, addressWE4FOGh, addressvQ7xipK, {from: accounts[1]});
		const addressoc8wCg = accounts[0]
		const addressqMdOzyM = accounts[5]
		const uintiMEfpTG = BigInt("8")
		const stringnGaE7iG = "XH5PgmFsL3o3VFQo7cNEsrXGIbfXslbazH7zwrN2XsMoJWcheHJ4uF6eofDEOoTbx"
		const addressP26LKK = await GardenContractV2hfypU7.addTokenOwner.call(addressqMdOzyM, addressoc8wCg, {from: accounts[1]});
		const stringgV3AUbn = await GardenContractV2hfypU7.harvest.call(stringnGaE7iG, uintiMEfpTG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2hfypU7.addTokenOwner.call(addressqMdOzyM, addressoc8wCg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressORwAWUf = accounts[1]
		const addressoDES6er = accounts[2]
		const addressZTKDfBT = "0x0000000000000000000000000000000000000001"
		const GardenContractV2NRjXHE = await GardenContractV2.new(addressORwAWUf, addressoDES6er, addressZTKDfBT, {from: accounts[1]});
		const uintD1V46g7 = BigInt("6")
		const uint256dZo9BGd = await GardenContractV2NRjXHE.getTotalrTLPHarvest.call(uintD1V46g7, {from: accounts[4]});

		await expect(GardenContractV2NRjXHE.getTotalrTLPHarvest.call(uintD1V46g7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszYR0fRV = "0x0000000000000000000000000000000000000001"
		const addressjcVYyaS = accounts[5]
		const addressJynTMPU = accounts[3]
		const GardenContractV2FQ6y5PB = await GardenContractV2.new(addresszYR0fRV, addressjcVYyaS, addressJynTMPU, {from: accounts[0]});
		const addressBsJzuSh = accounts[4]
		const uintva8PP0 = BigInt("255")
		const stringb22Y7QX = "L8OTTaVe2ZKECsOjXEAKzY"
		const uintRNhWvF6 = BigInt("231")
		const stringwYVZI1R = "1lfr5q1ODoOf4Hl4rtOHluJAd1s6tFzOzTfdD6vcJQdYHP2AtaftcmjhAubfkCNHnbxVE7FxpXMR8fAPWtOxeyLQccPQO"
		const addressclUZvV4 = await GardenContractV2FQ6y5PB.changeOwner.call(addressBsJzuSh, {from: accounts[0]});
		const stringnQ1Ri2Y = await GardenContractV2FQ6y5PB.claimDecompose.call(stringb22Y7QX, uintva8PP0, {from: accounts[1]});
		await GardenContractV2FQ6y5PB.totalBedSupply.call(stringwYVZI1R, uintRNhWvF6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2FQ6y5PB.claimDecompose.call(stringb22Y7QX, uintva8PP0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})