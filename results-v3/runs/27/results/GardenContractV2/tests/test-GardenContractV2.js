const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressvVIoi9a = accounts[0]
		const addressXN2HxiC = accounts[5]
		const addressgbccq1a = accounts[4]
		const GardenContractV2NCteSLP = await GardenContractV2.new(addressvVIoi9a, addressXN2HxiC, addressgbccq1a, {from: accounts[2]});
		const uintcTD77CI = BigInt("92")
		const stringiYpAjtR = "u57KRaQ42SGe9o9g6ht9hkOMAfFpvKVmjkuj5Dm6JnQGca6NAvve5L1jwXV"
		const uintAoDBYdD = BigInt("68")
		const uinthLbmgel = BigInt("83")
		const uintS4E18Pu = BigInt("148")
		const uint0CU4xC = BigInt("253")
		const addressRKKgU90 = accounts[5]
		const stringJ8Gnt1H = await GardenContractV2NCteSLP.harvest.call(stringiYpAjtR, uintcTD77CI, {from: accounts[0]});
		const uint8PrCrbtJ = await GardenContractV2NCteSLP.zeroHoldings.call(uinthLbmgel, uintAoDBYdD, {from: accounts[3]});
		const uint8IMqqUoA = await GardenContractV2NCteSLP.zeroHoldings.call(uint0CU4xC, uintS4E18Pu, {from: accounts[4]});
		const addressTUNLet2 = await GardenContractV2NCteSLP.renounceTokenOwner.call(addressRKKgU90, {from: accounts[4]});

		await expect(GardenContractV2NCteSLP.harvest.call(stringiYpAjtR, uintcTD77CI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressy0h6BED = accounts[0]
		const addresskDAVrJY = accounts[1]
		const addressZtYhv9U = accounts[4]
		const GardenContractV2agwKCP2 = await GardenContractV2.new(addressy0h6BED, addresskDAVrJY, addressZtYhv9U, {from: accounts[3]});
		const stringFxoKIZf = "rHpPgr1eqwH7plOcQMZdAy56mNfxomkxX4EEtgXu8oBRFnRy9B"
		const addressLCcGpen = accounts[5]
		const stringVLwg3aV = "klBkHiCwyhw0uLu3BSkf3XATPfxQzJqZfu0FyxJqNtXCOcVlWHSgIiR9u3LBnuEPBMU2JcOYVti6qOrJJlB1CXTJgSAP6snj6"
		const addressG8iLvQ = accounts[0]
		const uintk7IlArT = BigInt("654")
		const uintXOSGQnv = BigInt("60")
		const stringj8lTBgy = "FElaEgEuxrOkWrAX2gs8vwSTELqI6D4DtjUB"
		const uint9jnMGS = BigInt("238")
		const uintga0PbXf = BigInt("65")
		const uint256gUfO6O = await GardenContractV2agwKCP2.balanceOf.call(addressLCcGpen, stringFxoKIZf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256whmBWYk = await GardenContractV2agwKCP2.totalTLPGrowing.call(stringVLwg3aV, {from: accounts[1]});
		const addresshACzxq6 = await GardenContractV2agwKCP2.changeBenefitiary.call(addressG8iLvQ, {from: accounts[0]});
		const stringpPcZEc = await GardenContractV2agwKCP2.decompose.call(stringj8lTBgy, uintXOSGQnv, uintk7IlArT, {from: accounts[4]});
		const uint8Ys9ahQK = await GardenContractV2agwKCP2.setTimeStamp.call(uintga0PbXf, uint9jnMGS, {from: accounts[1]});

		await expect(GardenContractV2agwKCP2.balanceOf.call(addressLCcGpen, stringFxoKIZf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMChoG0W = accounts[1]
		const addressKfz27iL = accounts[2]
		const addresslJtWe3y = accounts[4]
		const GardenContractV2nUSOFVz = await GardenContractV2.new(addressMChoG0W, addressKfz27iL, addresslJtWe3y, {from: accounts[2]});
		const uintvTb8BLM = BigInt("140")
		const stringn6y677d = "PWsgs4WbleTp5OZBUdjclILoch9IgWvV9xoeSdgReEJXWl7GhVZ88Y4BO4MO1452asgf"
		const addressvdVAfS8 = accounts[2]
		const addresslMV3PgT = accounts[2]
		const addresskShU9n0 = accounts[5]
		const addressQNdP6G8 = accounts[3]
		const uint256YJvEequ = await GardenContractV2nUSOFVz.growthRemaining.call(addressvdVAfS8, stringn6y677d, uintvTb8BLM, {from: "0x0000000000000000000000000000000000000001"});
		const addressAByLJ7u = await GardenContractV2nUSOFVz.changeOwner.call(addresslMV3PgT, {from: accounts[5]});
		const addressI3r0ym0 = await GardenContractV2nUSOFVz.changeOwner.call(addresskShU9n0, {from: accounts[2]});
		const addressB0luM9z = await GardenContractV2nUSOFVz.changeOwner.call(addressQNdP6G8, {from: accounts[3]});

		await expect(GardenContractV2nUSOFVz.growthRemaining.call(addressvdVAfS8, stringn6y677d, uintvTb8BLM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresst6obcO = accounts[1]
		const addressgwkEImn = accounts[5]
		const addresssMdGEI = accounts[0]
		const GardenContractV2NKLfb0u = await GardenContractV2.new(addresst6obcO, addressgwkEImn, addresssMdGEI, {from: accounts[1]});
		const uintYvJdXs1 = BigInt("161")
		const uintXHUBNG = BigInt("95")
		const addressfPsHxKq = accounts[4]
		const uintukG40D8 = BigInt("66")
		const stringJJsVPyl = "QBQ4SkJvrSpIZNLPFbb1CKGN"
		const addressIV33fJf = "0x0000000000000000000000000000000000000001"
		const uintG43sWx = BigInt("100")
		const stringktChZx8 = "1xxoUSHHTn3SuuwvbPEq6SaFKXKKmRV2"
		const uintPoFpUDC = BigInt("117")
		const stringx1nwugc = "qmHQBCq4CZHSdOP2kz14aMiFBy1hIBW8dW1iYPi5GMw2CTmmp35dVjo3SrsgVsG"
		const uint8Ksk4H6Y = await GardenContractV2NKLfb0u.zeroHoldings.call(uintXHUBNG, uintYvJdXs1, {from: accounts[4]});
		const addressPUsyurL = await GardenContractV2NKLfb0u.changeOwner.call(addressfPsHxKq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oW3VrFp = await GardenContractV2NKLfb0u.growthRemaining.call(addressIV33fJf, stringJJsVPyl, uintukG40D8, {from: accounts[1]});
		const stringtvHAEty = await GardenContractV2NKLfb0u.harvest.call(stringktChZx8, uintG43sWx, {from: accounts[5]});
		const stringfDG3CA2 = await GardenContractV2NKLfb0u.harvest.call(stringx1nwugc, uintPoFpUDC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2NKLfb0u.zeroHoldings.call(uintXHUBNG, uintYvJdXs1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVysia9I = accounts[4]
		const addressmRtjI7 = accounts[2]
		const addressejUi5Ph = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addressVysia9I, addressmRtjI7, addressejUi5Ph, {from: accounts[3]});
		const stringWJ9uqP7 = "XUgYmdFbkgZpGlH2GQpkNJATiB6gmTJNI0XWFlU44rr6gAoJaivLctHT7elA"
		const stringqeDyt1B = "9wy3JDSVkkwRx4reUgBOyqGbIxvreQHKb4OfFb0VcF2bGj"
		const addresshIUFCBR = accounts[2]
		const stringzV22KqJ = await GardenContractV2FM9Dg2y.harvestAllBeds.call(stringWJ9uqP7, {from: accounts[4]});
		const uint256IU30O4Q = await GardenContractV2FM9Dg2y.balanceOf.call(addresshIUFCBR, stringqeDyt1B, {from: accounts[2]});

		await expect(GardenContractV2FM9Dg2y.harvestAllBeds.call(stringWJ9uqP7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressm4JqhpV = accounts[3]
		const addresssWtkwCZ = accounts[1]
		const addresszYEtB8T = accounts[5]
		const GardenContractV2wuE76H0 = await GardenContractV2.new(addressm4JqhpV, addresssWtkwCZ, addresszYEtB8T, {from: accounts[2]});
		const stringA5O746 = "JSfYVO6taY6giuFpjMU5jRgBWyzEFzmehwMTlu"
		const uintrT9yAkN = BigInt("228")
		const uintddCxm0 = BigInt("174")
		const uintaBmRfKp = BigInt("94")
		const uintTjeUex = BigInt("247")
		const uintEn4JbSe = BigInt("237")
		const stringNSP8xe1 = "cT6vhC28dld4cd54xmvNyPc5lczwNxvXiHtDCnu7gfyirn4buoTaN8Sl9EnSTdvGZfN3M2Uh"
		const uintUglh7T = BigInt("88")
		const stringGYvOrpR = "yrzFCKIuntimFA"
		const addressOleTob9 = accounts[1]
		const addressI6BwVWH = accounts[5]
		const stringbMRETOE = "YumsEXvM2KHj0X"
		const uint256hQ8LEx = await GardenContractV2wuE76H0.totalTLPBurnt.call(stringA5O746, {from: accounts[1]});
		const uint8O7B9aR1 = await GardenContractV2wuE76H0.operationBurnMint.call(uintaBmRfKp, uintddCxm0, uintrT9yAkN, {from: accounts[1]});
		const stringTOGlTSG = await GardenContractV2wuE76H0.decompose.call(stringNSP8xe1, uintEn4JbSe, uintTjeUex, {from: accounts[3]});
		const uint256UoBJVWU = await GardenContractV2wuE76H0.growthRemaining.call(addressOleTob9, stringGYvOrpR, uintUglh7T, {from: accounts[3]});
		const addressgjEVphR = await GardenContractV2wuE76H0.renounceTokenOwner.call(addressI6BwVWH, {from: accounts[4]});
		const uint256nCIx8eg = await GardenContractV2wuE76H0.totalGardenSupply.call(stringbMRETOE, {from: accounts[4]});

		await expect(GardenContractV2wuE76H0.totalTLPBurnt.call(stringA5O746, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGDSxkkZ = accounts[1]
		const addressgbj23Wj = accounts[4]
		const addressUjTVpiS = "0x0000000000000000000000000000000000000001"
		const GardenContractV2DfWlZUd = await GardenContractV2.new(addressGDSxkkZ, addressgbj23Wj, addressUjTVpiS, {from: accounts[0]});
		const uintdKEtZSe = BigInt("40")
		const stringAeNCIy3 = "eG6Mef27BXsBgYbkQzXnLpKpALdT2UuAWYy0aaLbLSaOxVaC5nw5L5Aq3fZLqq1eKPt1p5VxMyacsAnLdyPt82g1II71XhP"
		const uinto4LDDu1 = BigInt("24")
		const stringfF8AuVx = "Vq363X3ABlhskveQkyvVINZnm5XmgQJi5hJX4iPYY3NIp1eJDLb3BUPF9M"
		const uintoxF0w7l = BigInt("111")
		const stringRYwEkGm = "8ggZYTnJInoL86dfPmZ8GyPHyQbu5pWf0H97j6"
		const addressfIjKk75 = accounts[2]
		const stringmjD82Yn = await GardenContractV2DfWlZUd.claimDecompose.call(stringAeNCIy3, uintdKEtZSe, {from: accounts[0]});
		const uint256dIs0H7u = await GardenContractV2DfWlZUd.timeUntilNextTLP.call(stringfF8AuVx, uinto4LDDu1, {from: accounts[0]});
		const stringpKuj43 = await GardenContractV2DfWlZUd.claimDecompose.call(stringRYwEkGm, uintoxF0w7l, {from: accounts[4]});
		const addressIISja6j = await GardenContractV2DfWlZUd.renounceTokenOwner.call(addressfIjKk75, {from: accounts[2]});

		await expect(GardenContractV2DfWlZUd.claimDecompose.call(stringAeNCIy3, uintdKEtZSe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWIP3fPX = accounts[1]
		const addressvfL0wpk = accounts[2]
		const addressXjSC5UM = accounts[1]
		const GardenContractV2FAKZFX7 = await GardenContractV2.new(addressWIP3fPX, addressvfL0wpk, addressXjSC5UM, {from: accounts[4]});
		const uintz6Hthb2 = BigInt("82")
		const stringFYJgPL1 = "cRdELJEVp5AsMOvWXii0dTpfwIIGQTPxdmJdUUKYucpqXHkTS3zpIm"
		const uintdwdL3Zd = BigInt("26")
		const stringgWoaUkj = "Jt19e"
		const uintxWkDvMf = BigInt("192")
		const stringiHbtm63 = "BN8jHuqn4Gv5nxMiVuvMg1Gm3CbRwGPK3rKfCCWdHVL7Qmg77dYrAX"
		const addressrcZwgP6 = accounts[5]
		const uinte8SYNSt = BigInt("61")
		const stringRDFVjl = "X89CjQvd2XAqMRe5GioY4GsbzqCIxsr2"
		await GardenContractV2FAKZFX7.totalBedSupply.call(stringFYJgPL1, uintz6Hthb2, {from: accounts[2]});
		const stringjlPc9pZ = await GardenContractV2FAKZFX7.harvest.call(stringgWoaUkj, uintdwdL3Zd, {from: accounts[4]});
		const uint256Cfyqztg = await GardenContractV2FAKZFX7.growthRemaining.call(addressrcZwgP6, stringiHbtm63, uintxWkDvMf, {from: accounts[3]});
		const stringjCApZjU = await GardenContractV2FAKZFX7.harvest.call(stringRDFVjl, uinte8SYNSt, {from: accounts[4]});

		await expect(GardenContractV2FAKZFX7.totalBedSupply.call(stringFYJgPL1, uintz6Hthb2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQF7upfm = accounts[0]
		const addressC84tGlF = accounts[1]
		const addressNoQ9vbB = accounts[4]
		const GardenContractV2agwKCP2 = await GardenContractV2.new(addressQF7upfm, addressC84tGlF, addressNoQ9vbB, {from: accounts[3]});
		const stringVLwg3aV = "klBkHiCwyhw0uLu3BSkf3XATPfxQzJqZfu0FyxJqNtXCOcVlWHSgIiR9u3LBnuEPBMU2JcOYVti6qOrJJlB1CXTJgSAP6snj6"
		const addressxMfcByT = accounts[0]
		const uintpmk0vJn = BigInt("654")
		const uintMiYO2nO = BigInt("60")
		const stringj8lTBgy = "FElaEgEuxrOkWrAX2gs8vwSTELqI6D4DtjUB"
		const uintgdsvps7 = BigInt("238")
		const uintgca6nZn = BigInt("65")
		const uint256whmBWYk = await GardenContractV2agwKCP2.totalTLPGrowing.call(stringVLwg3aV, {from: accounts[1]});
		const addresshACzxq6 = await GardenContractV2agwKCP2.changeBenefitiary.call(addressxMfcByT, {from: accounts[0]});
		const stringpPcZEc = await GardenContractV2agwKCP2.decompose.call(stringj8lTBgy, uintMiYO2nO, uintpmk0vJn, {from: accounts[4]});
		const uint8Ys9ahQK = await GardenContractV2agwKCP2.setTimeStamp.call(uintgca6nZn, uintgdsvps7, {from: accounts[1]});

		await expect(GardenContractV2agwKCP2.totalTLPGrowing.call(stringVLwg3aV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressIHxqoZ = accounts[5]
		const addressQPY6btY = accounts[2]
		const addresspUZhDWa = accounts[3]
		const GardenContractV2DGur6bb = await GardenContractV2.new(addressIHxqoZ, addressQPY6btY, addresspUZhDWa, {from: accounts[0]});
		const uintUxLsTrZ = BigInt("137")
		const stringNHtQyZI = "4Ba32JsUE5fyBXtskwUq0"
		const stringqj1v4gh = "IpkM5RE"
		const uintXsHrMeY = BigInt("187")
		const uintONBK885 = BigInt("184")
		const stringNOnNj11 = "OtcbIyCd2IrVAwlNJ6tLraAorWhoGxGQPycbL5"
		const stringm0yOMQP = await GardenContractV2DGur6bb.withdraw.call(stringNHtQyZI, uintUxLsTrZ, {from: accounts[1]});
		const uint256pHF1kX = await GardenContractV2DGur6bb.totalTLPDecomposed.call(stringqj1v4gh, {from: accounts[4]});
		const stringZyurLN = await GardenContractV2DGur6bb.decompose.call(stringNOnNj11, uintONBK885, uintXsHrMeY, {from: accounts[2]});

		await expect(GardenContractV2DGur6bb.withdraw.call(stringNHtQyZI, uintUxLsTrZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXWRIIxJ = accounts[4]
		const addressFK2L3d9 = accounts[2]
		const addressF6TV6Zj = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addressXWRIIxJ, addressFK2L3d9, addressF6TV6Zj, {from: accounts[3]});
		const uintgKNAq7F = BigInt("157")
		const stringWJ9uqP7 = "XUgYmdFbkgZpGlH2GQpkNlJATiB6gmTJNI0XWFlU44rr6gAoJaivLctHT7elA"
		const stringqeDyt1B = "9wy3JDSVkkwRx4reUgBOyqGbIxvreQHKb4OfFb0VcF2bGj"
		const addresswyv2U1 = accounts[2]
		const stringbALk06v = "KeSpA4ofyF1X26NzymKHQz6yfcJvkNGvyppkoCPR0wJvvRxMIOSUzvqxVe7zINJvpacp2NCPd"
		const uintcw4QYla = BigInt("31")
		const string86CMub = "GFcjWkMtVyFzXr8dfNYiwaYyyYDAwlKKIXVSDvB6Q1yniW"
		const uint25618Ojtn = await GardenContractV2FM9Dg2y.getTotalsTLPHarvest.call(uintgKNAq7F, {from: accounts[2]});
		const stringzV22KqJ = await GardenContractV2FM9Dg2y.harvestAllBeds.call(stringWJ9uqP7, {from: accounts[4]});
		const uint256IU30O4Q = await GardenContractV2FM9Dg2y.balanceOf.call(addresswyv2U1, stringqeDyt1B, {from: accounts[2]});
		const stringASlB879 = await GardenContractV2FM9Dg2y.harvestAllBeds.call(stringbALk06v, {from: accounts[1]});
		const stringuBjgrPH = await GardenContractV2FM9Dg2y.harvest.call(string86CMub, uintcw4QYla, {from: accounts[5]});

		await expect(GardenContractV2FM9Dg2y.getTotalsTLPHarvest.call(uintgKNAq7F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGtlovDN = accounts[1]
		const addresseNThLQg = accounts[4]
		const addressYyLuyKC = "0x0000000000000000000000000000000000000001"
		const GardenContractV2DfWlZUd = await GardenContractV2.new(addressGtlovDN, addresseNThLQg, addressYyLuyKC, {from: accounts[0]});
		const addressbF2QlFD = accounts[3]
		const uintSABXpRe = BigInt("40")
		const stringAeNCIy3 = "eG6Mef27BXsBgYbkQzXnLpKpALdT2UuAWYy0aaLbLSaOxVaC5nw5L5Aq3fZLqq1eKPt1p5VxMyacsAnLdyPt82g1II71XhP"
		const uintKtji4ZC = BigInt("117")
		const uintvYhrWwo = BigInt("46")
		const uintvsvGuSp = BigInt("60")
		const stringkUTA0j8 = "8jsJ58vaNd1be11ojqpxmACjzKvutkf5ejtaGxxC2hluFffNEi"
		const uintfvFiGsL = BigInt("24")
		const stringfF8AuVx = "Vq363X3ABlhskveQkyvVINZnm5XmgQJi5hJX4iPYY3NIp1eJDLb3BUPF9M"
		const uintMwaiAOr = BigInt("81")
		const stringRYwEkGm = "8ggZYTnJInoL86dfPmZ8GyPHyQbu5pWf0H97j6"
		const addressCsMRzGJ = accounts[4]
		const addressrEmENW7 = await GardenContractV2DfWlZUd.changeOwner.call(addressbF2QlFD, {from: accounts[0]});
		const stringmjD82Yn = await GardenContractV2DfWlZUd.claimDecompose.call(stringAeNCIy3, uintSABXpRe, {from: accounts[0]});
		const uint8phMRZjN = await GardenContractV2DfWlZUd.setTimeStamp.call(uintvYhrWwo, uintKtji4ZC, {from: accounts[3]});
		await GardenContractV2DfWlZUd.totalBedSupply.call(stringkUTA0j8, uintvsvGuSp, {from: accounts[2]});
		const uint256dIs0H7u = await GardenContractV2DfWlZUd.timeUntilNextTLP.call(stringfF8AuVx, uintfvFiGsL, {from: accounts[0]});
		const stringpKuj43 = await GardenContractV2DfWlZUd.claimDecompose.call(stringRYwEkGm, uintMwaiAOr, {from: accounts[4]});
		const addressIISja6j = await GardenContractV2DfWlZUd.renounceTokenOwner.call(addressCsMRzGJ, {from: accounts[2]});

		await expect(GardenContractV2DfWlZUd.claimDecompose.call(stringAeNCIy3, uintSABXpRe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspzbtRMC = accounts[5]
		const addressq8LCQh2 = accounts[2]
		const addresseLY8g92 = accounts[3]
		const GardenContractV2DGur6bb = await GardenContractV2.new(addresspzbtRMC, addressq8LCQh2, addresseLY8g92, {from: accounts[0]});
		const uintu6nRb58 = BigInt("200")
		const stringtXniGBi = "S6uSFIFXzrtOgoJwygQAC2ftgdNUs7OKSgcKFXC6lJ8fWLspmAQOcaNwRxvRfXQw2MwcO5Wk5CPV"
		const uinteG28Pbu = BigInt("137")
		const stringNHtQyZI = "4Ba32JsUE5fyBXtskwUq0"
		const stringqj1v4gh = "InkM5RE"
		const uintQvd5ew4 = BigInt("187")
		const uintFAfK9yl = BigInt("184")
		const stringNOnNj11 = "OtcbIyCd2IrVAwlNJ6tLraAorWhoGxGQPycbL5"
		const uint256jvtYsVE = await GardenContractV2DGur6bb.timeUntilNextTLP.call(stringtXniGBi, uintu6nRb58, {from: accounts[2]});
		const stringm0yOMQP = await GardenContractV2DGur6bb.withdraw.call(stringNHtQyZI, uinteG28Pbu, {from: accounts[1]});
		const uint256pHF1kX = await GardenContractV2DGur6bb.totalTLPDecomposed.call(stringqj1v4gh, {from: accounts[4]});
		const stringZyurLN = await GardenContractV2DGur6bb.decompose.call(stringNOnNj11, uintFAfK9yl, uintQvd5ew4, {from: accounts[2]});

		await expect(GardenContractV2DGur6bb.timeUntilNextTLP.call(stringtXniGBi, uintu6nRb58, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvjTGuIf = accounts[4]
		const addressKpB2VrD = accounts[2]
		const addressMEECKqI = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addressvjTGuIf, addressKpB2VrD, addressMEECKqI, {from: accounts[3]});
		const stringSJ3pSF = "zUcaouOkN2xXMheoErPQ39HNqzBNrwUv8Rti2TTQCz0mD15KlAFSyNiwrFHWmqqzlN6HoUCYfSmHm"
		const stringxh5zga9 = "GIMw7wbSTciFYTENDlVtYcVLrEY2S5DnMu4szAQZotV"
		const stringqeDyt1B = "9wy3JDSVkkwRx4reUgBOyqGbIxvreQHKb4OfFb0VcD2bGj"
		const address40UCID = accounts[1]
		const uintZBAOZ7 = BigInt("57")
		const stringDaaM0i4 = "PI05xvgB44l33jpV1bIyDTIleuAkrVxF57gclZMNd7Z"
		const addressCYoL1vf = accounts[4]
		const uint256n2sunI5 = await GardenContractV2FM9Dg2y.totalTLPDecomposed.call(stringSJ3pSF, {from: accounts[0]});
		const uint256RsI9byp = await GardenContractV2FM9Dg2y.totalTLPGrowing.call(stringxh5zga9, {from: accounts[0]});
		const uint256IU30O4Q = await GardenContractV2FM9Dg2y.balanceOf.call(address40UCID, stringqeDyt1B, {from: accounts[2]});
		const uint256xEjuge = await GardenContractV2FM9Dg2y.growthRemaining.call(addressCYoL1vf, stringDaaM0i4, uintZBAOZ7, {from: accounts[2]});

		await expect(GardenContractV2FM9Dg2y.totalTLPDecomposed.call(stringSJ3pSF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrMK3CqH = accounts[4]
		const addressE4bzL1j = accounts[2]
		const addressQiChgLO = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addressrMK3CqH, addressE4bzL1j, addressQiChgLO, {from: accounts[3]});
		const stringOLXYkXC = "GRgmWQPchrozph"
		const stringWJ9uqP7 = "XUgYmdFbkgZpG6lH2GQpkNJATiB6gmTJNI0XWFlU44rr6gAoJaivLctHT7elA"
		const stringqeDyt1B = "9wy3JDSVkkwRx4reUgBOyqGbIxvreQHKb4OfFb0VcF2bGj"
		const addressDzqXDuO = accounts[2]
		const uintu1G9NaZ = BigInt("249")
		const stringiiTxCfR = "LHeomTrY8Xwjs"
		const uint256smQ3NJz = await GardenContractV2FM9Dg2y.totalGardenSupply.call(stringOLXYkXC, {from: "0x0000000000000000000000000000000000000001"});
		const stringzV22KqJ = await GardenContractV2FM9Dg2y.harvestAllBeds.call(stringWJ9uqP7, {from: accounts[4]});
		const uint256IU30O4Q = await GardenContractV2FM9Dg2y.balanceOf.call(addressDzqXDuO, stringqeDyt1B, {from: accounts[2]});
		const stringLLC7o8y = await GardenContractV2FM9Dg2y.withdraw.call(stringiiTxCfR, uintu1G9NaZ, {from: accounts[5]});

		await expect(GardenContractV2FM9Dg2y.totalGardenSupply.call(stringOLXYkXC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressDh7oowO = accounts[4]
		const addressbPE8Mn = accounts[0]
		const addressK8axerN = accounts[3]
		const GardenContractV2faGJfy = await GardenContractV2.new(addressDh7oowO, addressbPE8Mn, addressK8axerN, {from: accounts[0]});
		const boolNQ68QL = true
		const uinte6LUpsk = BigInt("35")
		const stringq2aKzsh = "fhW2g3xdWjvgIkrGjt6N1fFIMZL91ZwtEiYdF5rTNHhoHjLKP4qglMwqw2bwqJH1Iog6bM3iOGOlGSkRxLQ"
		const uintMhccHsH = BigInt("394")
		const addressgHtwu4Y = "0x0000000000000000000000000000000000000001"
		const uintuU6zQ9h = BigInt("65")
		const stringeHHwmtw = "WmBJgvfScSe8LbfW41yN8nbolUPRLLbgYmYfOtQtUQo4Uvv1Ta26jcun5SuMTj9CnA3SDlETbcefVdI"
		const addresss0xcLxb = accounts[5]
		const uint256pMXLOxQ = await GardenContractV2faGJfy.plant.call(uintMhccHsH, stringq2aKzsh, uinte6LUpsk, boolNQ68QL, {from: accounts[1]});
		const addressQbBt8qP = await GardenContractV2faGJfy.changeOwner.call(addressgHtwu4Y, {from: accounts[4]});
		const uint256QnGilCY = await GardenContractV2faGJfy.growthRemaining.call(addresss0xcLxb, stringeHHwmtw, uintuU6zQ9h, {from: accounts[0]});

		await expect(GardenContractV2faGJfy.plant.call(uintMhccHsH, stringq2aKzsh, uinte6LUpsk, boolNQ68QL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresst39PB4p = accounts[4]
		const addressGoLbcIf = accounts[2]
		const addressswPdLmN = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addresst39PB4p, addressGoLbcIf, addressswPdLmN, {from: accounts[3]});
		const uintjJzDCsu = BigInt("160")
		const uinty2rU27o = BigInt("147")
		const stringX5ECRYm = "nduSk9hN5r27Se86Y2dJWgeVfn"
		const uint88eNv4 = BigInt("1160")
		const uintHNYkFL = BigInt("34")
		const stringCjA6mRZ = "6qD6aMVnmietlVVy4ClfDTuC8XVAv5spyCMkP9pGjfy1vDO2Cfw4wYhFnPBjhuxnogYuhqOszcXi9M97Sq6jZvEb"
		const stringqeDyt1B = "9wy3JDSVkkwRx4reUgBOyNGbIxvreQHKb4OfFb0VcD2bGj"
		const addressotqUwbT = accounts[1]
		const stringjVFnxdV = await GardenContractV2FM9Dg2y.decompose.call(stringX5ECRYm, uinty2rU27o, uintjJzDCsu, {from: accounts[3]});
		const stringezFTuVZ = await GardenContractV2FM9Dg2y.decompose.call(stringCjA6mRZ, uintHNYkFL, uint88eNv4, {from: accounts[2]});
		const uint256IU30O4Q = await GardenContractV2FM9Dg2y.balanceOf.call(addressotqUwbT, stringqeDyt1B, {from: accounts[2]});

		await expect(GardenContractV2FM9Dg2y.decompose.call(stringX5ECRYm, uinty2rU27o, uintjJzDCsu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAusG6L5 = accounts[4]
		const addressW5VQbjX = accounts[2]
		const addresscVAlyf = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addressAusG6L5, addressW5VQbjX, addresscVAlyf, {from: accounts[3]});
		const stringW7rARpG = "ccqTJMO3IfBp6Wd4cDEcpoVUP33fcgM"
		const stringcmkceAV = "DVKDr88uuTFXEZ2GJOCObNuONmzGvpcAD0lsJjMnsWkF3NfW556kLRzg1gUJ9IQK3yI6s4rr6WMqhAUC9DRU9Z2fQeha"
		const stringWJ9uqP7 = "XUgYmdFbkgZpGlH2GQpkNJATiB6gmTJNI0XWFlU44rr6gAoJaivLctHT7lA"
		const uint256Yn0N03S = await GardenContractV2FM9Dg2y.totalTLPGrown.call(stringW7rARpG, {from: accounts[0]});
		const uint256ka30mYU = await GardenContractV2FM9Dg2y.totalTLPDecomposed.call(stringcmkceAV, {from: accounts[2]});
		const stringzV22KqJ = await GardenContractV2FM9Dg2y.harvestAllBeds.call(stringWJ9uqP7, {from: accounts[4]});

		await expect(GardenContractV2FM9Dg2y.totalTLPGrown.call(stringW7rARpG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseE3L4kc = accounts[4]
		const addresshlAokzh = accounts[2]
		const addressxPCqU8g = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addresseE3L4kc, addresshlAokzh, addressxPCqU8g, {from: accounts[3]});
		const addressaaoPtCO = accounts[0]
		const stringqeDyt1B = "9wy3JDSVkkwRx4reUgBOyqGbIxvreQHKb4OfFb0VcD2bGj"
		const addressFyj6SjM = accounts[1]
		const addresszRwKX3k = accounts[2]
		const uintR36fyxy = BigInt("202")
		const stringlwBpmoM = "kHqdEgX1qXAnORkNcOBo31w7KRNKrWM2milXB5OBaW3KzEK9IJkqcqYrgwusbobMm"
		const addressf1ePDLC = await GardenContractV2FM9Dg2y.changeOwner.call(addressaaoPtCO, {from: accounts[2]});
		const uint256IU30O4Q = await GardenContractV2FM9Dg2y.balanceOf.call(addressFyj6SjM, stringqeDyt1B, {from: accounts[2]});
		const addresslpZp8L8 = await GardenContractV2FM9Dg2y.changeOwner.call(addresszRwKX3k, {from: accounts[1]});
		await GardenContractV2FM9Dg2y.totalBedSupply.call(stringlwBpmoM, uintR36fyxy, {from: accounts[0]});

		await expect(GardenContractV2FM9Dg2y.changeOwner.call(addressaaoPtCO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvoMJOJR = accounts[5]
		const addressuRRfdd = accounts[2]
		const addressMwFl50 = accounts[3]
		const GardenContractV2DGur6bb = await GardenContractV2.new(addressvoMJOJR, addressuRRfdd, addressMwFl50, {from: accounts[0]});
		const addressXeuJAhP = accounts[0]
		const addressUtJ9pt = accounts[1]
		const uintmBJm9fi = BigInt("137")
		const stringNHtQyZI = "4Ba32JsE5fBXtskwUq0"
		const addressJOCOwY3 = await GardenContractV2DGur6bb.addTokenOwner.call(addressUtJ9pt, addressXeuJAhP, {from: accounts[0]});
		const stringm0yOMQP = await GardenContractV2DGur6bb.withdraw.call(stringNHtQyZI, uintmBJm9fi, {from: accounts[1]});

		await expect(GardenContractV2DGur6bb.addTokenOwner.call(addressUtJ9pt, addressXeuJAhP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssjQgCJz = accounts[5]
		const addressE6C4Gg7 = accounts[2]
		const address63DdRU = accounts[3]
		const GardenContractV2DGur6bb = await GardenContractV2.new(addresssjQgCJz, addressE6C4Gg7, address63DdRU, {from: accounts[0]});
		const uintsIbqtT6 = BigInt("18")
		const uint5TPbFI = BigInt("200")
		const stringtXniGBi = "S6uSFIFXzrtOgoJwygQAC2ftgdNUs7OKSgcKFXC6lJ8fWLspmAQOcaNwRxvRfXQw2MwcO5Wk5CPV"
		const stringOU2FYfq = "d"
		const addresstoWsx9d = accounts[3]
		const uintwKvvJ42 = BigInt("137")
		const stringNHtQyZI = "4Ba32JsUJE5fyBXtskwUH0"
		const uintWlRNqhU = BigInt("187")
		const uintoJrN0Ll = BigInt("184")
		const stringNOnNj11 = "OtcbIyCd2IrVAwlNJ6tLraAorWhoGxGQPycbL5"
		const uint256nGCVx3D = await GardenContractV2DGur6bb.getTotalrTLPHarvest.call(uintsIbqtT6, {from: accounts[3]});
		const uint256jvtYsVE = await GardenContractV2DGur6bb.timeUntilNextTLP.call(stringtXniGBi, uint5TPbFI, {from: accounts[2]});
		const uint256RnJzaFA = await GardenContractV2DGur6bb.totalTLPDecomposed.call(stringOU2FYfq, {from: accounts[2]});
		const addresssGQJx82 = await GardenContractV2DGur6bb.changeBenefitiary.call(addresstoWsx9d, {from: accounts[2]});
		const stringm0yOMQP = await GardenContractV2DGur6bb.withdraw.call(stringNHtQyZI, uintwKvvJ42, {from: accounts[1]});
		const stringZyurLN = await GardenContractV2DGur6bb.decompose.call(stringNOnNj11, uintoJrN0Ll, uintWlRNqhU, {from: accounts[2]});

		await expect(GardenContractV2DGur6bb.getTotalrTLPHarvest.call(uintsIbqtT6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKWWrKL4 = accounts[4]
		const addressIAeBGl1 = accounts[1]
		const addressWCPwlsp = accounts[5]
		const GardenContractV2EyI7BzZ = await GardenContractV2.new(addressKWWrKL4, addressIAeBGl1, addressWCPwlsp, {from: accounts[3]});
		const addressGIAHaU9 = accounts[5]
		const addresswIyOXkZ = accounts[3]
		const uintsbUy4pW = BigInt("1964")
		const uintBq8Uk9j = BigInt("224")
		const stringlmLVaA2 = "54f9G1VNRQFN5IJZuMm2o8lFmXx8c5aqp8RhY13XuyrnCPOPCamtKc0W"
		const addressCUw1EYH = await GardenContractV2EyI7BzZ.changeBenefitiary.call(addressGIAHaU9, {from: accounts[3]});
		const addressL1Fo8v = await GardenContractV2EyI7BzZ.changeBenefitiary.call(addresswIyOXkZ, {from: accounts[4]});
		const stringxAu4sHY = await GardenContractV2EyI7BzZ.decompose.call(stringlmLVaA2, uintBq8Uk9j, uintsbUy4pW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2EyI7BzZ.changeBenefitiary.call(addresswIyOXkZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstH4feMZ = accounts[4]
		const addressDJq5ftE = accounts[2]
		const addressqkDz6og = accounts[2]
		const GardenContractV2QBa8108 = await GardenContractV2.new(addresstH4feMZ, addressDJq5ftE, addressqkDz6og, {from: "0x0000000000000000000000000000000000000001"});
		const uintfEw89KR = BigInt("219")
		const stringF3NpJKN = "oAcCBw86NZIOfcgpwK0oDk1QVl7n6e3SlwmsRkZAe83KQO6vSI0VkoSiedj3KutKLjrypGq"
		const uintufkkGsI = BigInt("62")
		const uintXCuqnL2 = BigInt("196")
		const uintFNHO5es = BigInt("34")
		const stringv3W9RMj = "dMcN41ku"
		const uintva0wArQ = BigInt("160")
		const uinttIj0bBE = BigInt("62")
		const stringfSaJDnl = await GardenContractV2QBa8108.withdraw.call(stringF3NpJKN, uintfEw89KR, {from: accounts[3]});
		const uint256CfnGaB1 = await GardenContractV2QBa8108.getTotalsTLPHarvest.call(uintufkkGsI, {from: accounts[4]});
		const uint256LBiKurL = await GardenContractV2QBa8108.getTotalsTLPHarvest.call(uintXCuqnL2, {from: accounts[2]});
		const stringG9xm12i = await GardenContractV2QBa8108.withdraw.call(stringv3W9RMj, uintFNHO5es, {from: accounts[0]});
		const uint8mCgf417 = await GardenContractV2QBa8108.setTimeStamp.call(uinttIj0bBE, uintva0wArQ, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressgacz1aO = accounts[4]
		const addresst2LVlp1 = accounts[2]
		const addressIgVOad4 = accounts[2]
		const GardenContractV2FM9Dg2y = await GardenContractV2.new(addressgacz1aO, addresst2LVlp1, addressIgVOad4, {from: accounts[3]});
		const addressE324cVH = accounts[4]
		const stringqeDyt1B = "9wy3JDSVkkwRx4reUgBOyqGbIxvreQHKb4OfFb0VcD2bGj"
		const addressmlMueFc = accounts[2]
		const uintkrsmDFH = BigInt("198")
		const stringZiuRGeR = "ZcVHGhCVUDEalRC5itv5xfEsN"
		const boolkmzQnzC = true
		const uintxfM2HFl = BigInt("98")
		const stringFia8via = "b7sdRiQVUGeCoeWxbZ91yLMYrhTKHAT072gv3KN"
		const uintgVqlXdq = BigInt("886")
		const addressZ2IJWpY = await GardenContractV2FM9Dg2y.renounceTokenOwner.call(addressE324cVH, {from: accounts[3]});
		const uint256IU30O4Q = await GardenContractV2FM9Dg2y.balanceOf.call(addressmlMueFc, stringqeDyt1B, {from: accounts[2]});
		const stringWxr3Vm = await GardenContractV2FM9Dg2y.withdraw.call(stringZiuRGeR, uintkrsmDFH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UfeRGUW = await GardenContractV2FM9Dg2y.plant.call(uintgVqlXdq, stringFia8via, uintxfM2HFl, boolkmzQnzC, {from: accounts[4]});

		await expect(GardenContractV2FM9Dg2y.renounceTokenOwner.call(addressE324cVH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstuxrovQ = "0x0000000000000000000000000000000000000001"
		const addressrOX3fHS = accounts[1]
		const addressTfm4pdE = accounts[4]
		const GardenContractV2cle7AvW = await GardenContractV2.new(addresstuxrovQ, addressrOX3fHS, addressTfm4pdE, {from: accounts[2]});
		const uintIZqw0Qj = BigInt("7")
		const stringp0kTzud = "qQU2DlxGKHHy6I17PGS1Vijwi7gPd"
		const stringgA5mF0M = "fygBEpccXBOW6qiRe5mXnFysKCcmZha1xrS9dliFv9FDL11T9IMQQvROi6h"
		const uintnsvlGfE = BigInt("167")
		const stringo7vNHwC = "Y2BOuhrhUrnOSFGgFNjxTmhS6CbzU7TlNxH1P6zBmg35yyzBGnuffo0b4R9O3ZdDFxImdYx9UDN76Z"
		const uint256cGiWu5W = await GardenContractV2cle7AvW.getTotalrTLPHarvest.call(uintIZqw0Qj, {from: accounts[2]});
		const uint256xpNx66u = await GardenContractV2cle7AvW.totalTLPGrown.call(stringp0kTzud, {from: accounts[5]});
		const stringbyiODG5 = await GardenContractV2cle7AvW.harvestAllBeds.call(stringgA5mF0M, {from: accounts[4]});
		const uint256GDzYYr5 = await GardenContractV2cle7AvW.timeUntilNextTLP.call(stringo7vNHwC, uintnsvlGfE, {from: accounts[0]});

		await expect(GardenContractV2cle7AvW.getTotalrTLPHarvest.call(uintIZqw0Qj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})